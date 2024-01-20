<template>
    <section id="flip-scroll">
        <div v-if="data.length > 0" id="table_card_cotainer">
            <table class="table table-bordered table-hover" id="table-cards">          
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th v-for="key  in  Object.keys(data[0])" :key="key" scope="col">
                            {{ key.toLocaleUpperCase() }}
                        </th>            
                    </tr>
                </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key="item" class="row-card-list" @click="SelectRow($event)">
                    <th scope="row">
                        {{ index }}
                    </th>
                    <td v-for="value in item" :key="value">
                        {{ value }}
                    </td>
                    hola
                    <StarRating/>
                </tr>  
            </tbody>              
        </table>
    </div>
    <div v-else>
        No hay charlas disponibles.
    </div>
    <div id="buttons_container" v-if="data.length > 0" class="container">
        <div class="row justify-content-center">
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Detalles</button>
            </div>
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Acreditar</button>                
            </div>
        </div>
    </div>        
</section>

</template>
<script>
import StarRating from 'vue-star-rating';

export default {
    name:"TableCards",
    data(){
        return{
            data:[],
            row:null
        }
    },
    components: {
        StarRating
    },
    props:{
        dataTable: {
            type: Array,
            default: () => [],
        },
        showId: {
            type: Boolean,
            default: false,
        },
    },
    methods: {    
        // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
        CleanTableView(){
            var regex = /id|ID/;
            this.charlas.forEach(charla => {
                Object.keys(charla).forEach(key => {
                    if(key.match(regex)){
                        delete charla[key];
                    }
                });
            });
            console.log(this.charlas)
        },
        SelectRow(event){            
            this.row = Array.prototype.slice.call( event.currentTarget.children );
            this.row.forEach(cell => {
                cell.style["background-color"] = "red";
                console.log(cell)
            });
        }
    },
    mounted(){
       this.data = this.dataTable;
    },
    watch:{
        row(newRow,oldRow){
            if(newRow != oldRow && oldRow != null){
                oldRow.bgColor = ""
            }
        }
    }
}
</script>
<style>

#table_card_cotainer{overflow-x: scroll;}
#flip-scroll .cf:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
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