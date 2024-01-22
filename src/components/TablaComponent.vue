<template>
  <div v-if="data.length > 0" id="table_data_cotainer">
      <table class="table table-hover rounded-1 overflow-hidden" id="table-data">          
          <thead class="thead-dark">
              <tr>                    
                  <th v-for="key  in  Object.keys(data[0])" 
                      :key="key" scope="col" v-show="CleanTableView(key)">
                          {{ key.toLocaleUpperCase() }}
                  </th>     
                  <th class="th_container_button">
                  </th>       
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, ind_item) in data" :key="item" class="row-charla-list">                   
                  <td v-for="(value, key) in item" 
                      :key="key" v-show="CleanTableView(key)"
                      class="justify-content-center text-center">
                          <textarea 
                              class="form-control border-0 bg-transparent p-0 text-center"
                              rows="auto"
                              type="text" 
                              v-model="data[ind_item][key]"
                              :disabled="!editable"> 
                          </textarea>
                  </td>
                  <td class="w-auto align-middle p-0" v-if="showBtn">                        
                      <button class="col-auto mr-auto btn btn-outline-primary py-1 px-2 mx-2 border-0">
                          <i class="bi bi-floppy"></i>
                      </button>
                      <button class="col-auto mr-auto btn btn-outline-danger py-1 px-2 mx-2 border-0">
                          <i class="bi bi-x-circle" ></i>
                      </button>
                  </td>
              </tr>  
          </tbody>              
      </table>      
  </div>
  <div v-else>
      No hay cursos disponibles.
  </div>
</template>
<script>
export default {
  name:"TablaComponent",
  props:{
    dataTable:[],
    editable:Boolean ?? false,
    showBtn:Boolean ?? false,   
    showId:Boolean ?? false,
  },
  data(){
    return{
      data : []
    }
  },
  methods:{
      UpdateRow(){
         
      },      
      // Para ocultar datos que no necesitamos mostrar en la tabla (ID´s)
      CleanTableView(value){      
          var regex = /id|ID/;           
          if(this.showBtn){
            return true
          }
          if(value.match(regex)){
              return false;
          } 
          return true;        
      },
      Btn_Eliminar(){

      }
  },
  mounted(){
    this.data = this.dataTable
  }
}
</script>
<style>
  textarea{
      resize: none;
  }
  @media (min-width:320px) { /* smartphones, iPhone, portrait 480x320 phones */
  .form-control {
      font-size: 0.7rem;
      padding-bottom: 0;
      margin-bottom: 0;
  }
  .bi{
      font-size: 0.8rem;
  }
}
</style>