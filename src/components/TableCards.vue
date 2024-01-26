<template>
    <section id="flip-scroll" class="container" v-if="dataTable.length > 0">
        <div v-if="data.length > 0" id="table_card_cotainer">
            <table class="table table-bordered table-hover table-responsive" id="table-cards">          
                <thead>
                    <tr>
                        <th v-show="showIndexTable">
                            #
                        </th>
                        <th v-for="key  in  Object.keys(data[0])" :key="key" v-show="CleanTableView(key)" scope="col">
                            {{ key.toLocaleUpperCase() }}
                        </th>            
                    </tr>
                </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key="item" class="row-card-list" @click="SelectRow($event)">
                    <th scope="row" v-show="showIndexTable">
                        {{ index }}
                    </th>
                    <td v-for="(value, key) in item" :key="value" v-show="CleanTableView(key)">
                        {{ value }}
                    </td>              
                    
                </tr>  
            </tbody>              
        </table>
    </div>
    <div v-else>
        No hay charlas disponibles.
    </div>
    <div id="buttons_container" v-if="data.length > 0" class="container">
        <div class="row justify-content-center" v-if="showBtns">
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Detalles</button>
            </div>
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success" @click="OptionsSelectedRow(row)">Opciones</button>                
            </div>
        </div>
    </div>        
</section>

</template>
<script>
// import StarRating from 'vue-star-rating';

export default {
    name:"TableCards",
    data(){
        return{
            data:[],
            row:null
        }
    },
    emits:[
        'view_row_btn',   //Devuelve la fila en la que se ha accionado el boton
        'options_row_btn' //Devuelve la fila en la que se ha accionado el boton
    ],
    props:{
        dataTable: {
            type: Array,
            default: () => []
        },
        showBtns:{
            type: Boolean,
            default: true
        },
        showId: {
            type: Boolean,
            default: false
        },
        showIndexTable:{
            type: Boolean,
            default: true
        },
        selectRowColor: {
            type:String,
            default: "grey"
        },        
    },
    methods: {    
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
        SelectRow(event){            
            if (this.row) {
                this.row.forEach((cell) => {
                    cell.style["background-color"] = "";
                });
            }
            // Get and set background color for the clicked row
            this.row = Array.prototype.slice.call(event.currentTarget.children);
            this.row.forEach((cell) => {
                cell.style["background-color"] = this.selectRowColor;
            });
        },
        ViewSelectedRow(){
            if(this.row){
                this.$emit('view_row_btn',this.row);
            }
        },
        OptionsSelectedRow(){
            if(this.row){
                this.$emit('options_row_btn',this.row);
            }
        }
    },
    mounted(){
       this.data = this.dataTable;
    },
    watch: {
        dataTable: {
            handler(newData) {
                this.data = newData;
            },
            immediate: true
        }
    }
}
</script>
<style>

#flip-scroll * html .cf { zoom: 1; }
#flip-scroll *:first-child+html .cf { zoom: 1; }

#flip-scroll table { width: 100%; border-collapse: collapse; border-spacing: 0; }

#flip-scroll th,
#flip-scroll td { margin: 0; vertical-align: top; size: 0.5rem; }
#flip-scroll th { text-align: left; size: 0.5rem;}

#flip-scroll table { display: block; position: relative; width: 100% }
#flip-scroll thead { display: block; float: left; }
#flip-scroll tbody { display: block; width: auto; position: relative; white-space: nowrap; }
#flip-scroll thead tr { display: block; }
#flip-scroll th { display: block; text-align: right; }
#flip-scroll tbody tr { display: inline-block; vertical-align: top; }
#flip-scroll td { display: block; min-height: 1.25em; text-align: left;}

/* sort out borders */
#flip-scroll th { border-bottom: 0; border-left: 0; }
#flip-scroll td { border-left: 0; border-right: 0; border-bottom: 0; }
#flip-scroll tbody tr { border-left: 1px solid #babcbf; }
#flip-scroll th:last-child,
#flip-scroll td:last-child { border-bottom: 1px solid #babcbf; }

</style>    