<template>
  <div id="table_data_cotainer">
      <table class="table table-hover rounded-1 overflow-hidden table-responsive" id="table-data">          
          <thead class="thead-dark" v-if="objectStructureCopied != undefined">
              <tr>                    
                  <th v-for="key  in  Object.keys(objectStructureCopied)" 
                      :key="key" scope="col" v-show="CleanTableView(key)">
                          {{ key.toLocaleUpperCase() }}
                  </th>     
                  <th class="th_container_button">
                  </th>       
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, ind_item) in data" :key="item" class="row-item-list" v-show="showTableContainer == true">                   
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
                  
                  <td class="w-auto align-middle p-0" v-if="showBtn && showTableContainer == true">                        
                      <button class="col-auto mr-auto btn btn-outline-primary py-1 px-2 mx-2 border-0" @click="UpdateRow(item)" v-if="saveBtn">
                          <i :class="btnSaveIcon"></i>
                      </button>
                      <button class="col-auto mr-auto btn btn-outline-danger py-1 px-2 mx-2 border-0" @click="DeleteRow(item, ind_item)" v-if="deleteBtn">
                        <i :class="btnDeleteIcon"></i> 
                      </button>
                      <button class="col-auto mr-auto btn btn-outline-success py-1 px-2 mx-2 border-0" @click="ViewRow(item)" v-if="viewBtn">
                        <i :class="btnViewIcon"></i> 
                      </button>
                  </td>
              </tr> 
              <tr v-if="showBtn">
                <td :colspan="Object.keys(objectStructureCopied).length + 1" class="p-0 py-1" >
                    <button class="btn btn-outline-success w-100" @click="AddRow(item)">
                        <i :class="btnAddIcon"></i>
                    </button>
                </td>
              </tr> 
          </tbody>              
      </table>   
    </div>
</template>
<script>
import Swal from 'sweetalert2';
export default {
  name:"CursosComponent",  
  emits: [
    'delete_btn_event', //Devuelve la fila en la que se ha accionado el boton
    'save_btn_event',   //Devuelve la fila en la que se ha accionado el boton
    'add_btn_event',    //Crea una nueva fila en la tabla y devuelve esa fila
    'view_btn_event'    //Devuelve la fila en la que se ha accionado el boton
  ],
  props:{
    dataTable: {
      type: Array,
      default: () => [],
    },
    editable: {
      type: Boolean,
      default: false,
    },
    showId: {
      type: Boolean,
      default: false,
    },
    showBtn: {
      type: Boolean,
      default: false,
    },
    saveBtn: {
      type: Boolean,
      default: true,
    },
    deleteBtn: {
      type: Boolean,
      default: true,
    },
    addBtn: {
      type: Boolean,
      default: true,
    },
    viewBtn: {
      type: Boolean,
      default: false,
    },
    btnSaveIcon:{
      type: String,
      default: "bi bi-floppy"
    },
    btnDeleteIcon:{
      type: String,
      default: "bi bi-trash"
    },
    btnAddIcon:{
      type: String,
      default: "bi bi-plus-square"
    },
    btnViewIcon:{
      type: String,
      default: "bi bi-eye"
    }
  },
  data(){
    return{
      data : [],
      objectStructureCopied: {},
      showTableContainer : true
    }
  },
  methods:{
    UpdateRow(rowData,) {   
      this.$emit('save_btn_event', rowData);
    },
    DeleteRow(rowData, index_item) {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {  
        if (result.isConfirmed) {
          if (this.data.length === 0) {
            // Set a flag to control rendering of the table container
            this.showTableContainer = false;
          }
          this.data.splice(index_item,1);
          this.$emit('delete_btn_event', rowData); 
      }})     
    },
    AddRow() {            
      this.data.push(this.copyObjectStructure(this.objectStructureCopied));   
      this.$emit('add_btn_event', this.data[this.data.length - 1]);     
    },
    ViewRow(rowData) {
      this.$emit('add_btn_event', rowData);  
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
    }
  },
  mounted(){
    this.data = this.dataTable
  },
  watch: {
        dataTable: {
            handler(newData) {
              this.data = newData;
              if(this.data.length > 0){
                this.objectStructureCopied = this.copyObjectStructure(this.data[0]);
              }
            },
            immediate: true
        }
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