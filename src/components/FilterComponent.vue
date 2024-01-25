<template lang="">
    <div class="container-fluid card border-0 w-100" v-if="objectStructureCopied != {}">
        <div class="my-1 mb-3 row align-self-center align-content-center" role="group">
            <div v-for="(key, index) in  Object.keys(objectStructureCopied)" class="col-auto align-self-center"
                :key="key" v-show="CleanTableView(key)">
                <input
                    type="checkbox"
                    class="btn-check"
                    :name="'btnRadioFilter'+index"
                    :id="'btnRadioFilter'+index"
                    :value="key"
                    :checked="fieldsFilter.includes(key)"
                    v-on:input="FilterOptionsChanged(key)"
                />
                <label class="btn btn-sm btn-outline-secondary m-1" :for="'btnRadioFilter'+index">
                    {{key.toUpperCase()}}
                </label>
            </div>
        </div>
        <div class="container-fluid m-0 p-0 mb-3 card">
            <div class="row justify-content-center" role="group">
                <div v-for="(key) in  fieldsFilter" :key="key" class="col-auto align-self-center my-1">
                <button class="btn btn-outline-secondary align-content-center btn-sm px-1 p-0 rounded-end-5 ps-1" v-on:click="FilterOptionsChanged(key)">
                    {{key.toUpperCase()}}
                    <i class="bi bi-x-circle align-self-end"></i>
                </button>
                </div>
            </div>
            <input type="text" class="form-control p-1" placeholder="Filtrar" v-model="search" v-on:input="FilterOrderBy()">
        </div>
    </div>
</template>
<script>
export default {
    name:"FilterComponent",
    data(){
        return{
            data:[],
            objectStructureCopied: {},
            fieldsFilter:[],
            search:undefined
        }
    },
    emits: [
        'filter_data_return' 
    ],
    props:{
        dataOriginal: {
            type: Array,
            default: () => [],
        },
        showId: {
            type: Boolean,
            default: false,
        }
    },
    methods:{ 
        copyObjectStructure(obj) {
            const copiedObject = {};

            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    copiedObject[key] = this.copyObjectStructure(obj[key]); 
                } else {
                    if(this.CleanTableView(key)){
                        copiedObject[key] = "*"+key.toUpperCase()+"*";
                    }else{
                        copiedObject[key]= null ;
                    }
                }
                }
            }
            return copiedObject;
        },
        // Para ocultar datos que no necesitamos mostrar en la tabla (ID´s)
        CleanTableView(value){      
            var regex = /id|ID/;           
            if(this.showId){
                return true
            }
            if(value.match(regex)){
                return false;
            } 
            return true;        
        },
        FilterOptionsChanged(key){
            if(this.fieldsFilter.includes(key)){
                this.fieldsFilter.splice(this.fieldsFilter.indexOf(key), 1);
            }else{
                this.fieldsFilter.push(key);
            }
            
            if(this.search != undefined){
                this.FilterOrderBy();
            }
        },
        FilterOrderBy(){
            this.data=  this.data.slice().sort((a, b) => this.calculateSimilarity(a,b));
            this.$emit('filter_data_return', this.data); 
        },
        calculateSimilarity(a, b) {
            const getValueForComparison = (value) => {
                return value == null ? "" : String(value).toLowerCase();
            };

            if (this.search != null && this.search.trim() !== "") {
                const filter = new RegExp(this.search.trim(), 'gi');
                const aMatches = this.fieldsFilter.some(field => getValueForComparison(a[field]).match(filter));
                const bMatches = this.fieldsFilter.some(field => getValueForComparison(b[field]).match(filter));

                if (aMatches && !bMatches) {
                    return -1;
                } else if (!aMatches && bMatches) {
                    return 1;
                } else {
                    return 0;
                }
            }
            return 0; 
        }
    },
  
    mounted(){
        this.data = this.dataOriginal
    },
    watch: {
        dataOriginal: {
            handler(newData) {
                this.data = newData;
                if(this.data.length > 0 ){
                    this.objectStructureCopied = this.copyObjectStructure(this.data[0]);
                }
            },
            immediate: true
        }
    }
}
</script>
<style lang="">
    
</style>