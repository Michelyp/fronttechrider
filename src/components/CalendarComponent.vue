<template>
  <vue-cal   
    class=""
    :time="true" 
    active-view="month"     
    :events="events" 
    events-count-on-year-view
    events-on-month-view="short"
    style="height: 600px"
    :on-event-click="ShowDialog"
    >
  </vue-cal>

  <transition name="bounce">
    <div v-if="showDialog" class="dialog-overlay" :onclick="()=>{this.showDialog = false}">
      <div class="card z-3" id="dialog">
        <div class="row justify-content-end mb-2">
          <button class="btn btn-close float-end" :onclick="()=>{this.showDialog = false}"/>
        </div>
        <div class="card row text-start">
          <div class="card-header" v-if="selectedEvent.techRider != ''" >
          TechRider: {{ selectedEvent.techRider }}
          </div>
          <div class="card-body">
            <p class="card-text">{{ selectedEvent.descripcionCharla }}</p>
          </div>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" v-if="selectedEvent.provincia != null">
              PROVINCIA: {{ selectedEvent.provincia.toUpperCase() }}
            </li>
            <li class="list-group-item" v-if="selectedEvent.modalidad != null">
              MODALIDAD: {{ selectedEvent.modalidad.toUpperCase() }}
            </li>            
          </ul>
          <div class="card-footer">
              <div class="col float-start me-3" v-if="selectedEvent.email != null">
                {{ selectedEvent.email }}
              </div>
              <div class="col float-end ms-3" v-if="selectedEvent.telefono != null">
                {{ selectedEvent.telefono }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import QueryService from "@/services/QueryService";
const service = new QueryService();

export default {
  name:"CalendarComponent",
  components:{
    VueCal
  },
  data(){
    return{
      showDialog:false,
      selectedEvent:{},
      events:[],
      charlas:[]
    }
  },
  methods:{
    LoadAllCharlas(){
      service.CharlasView().then(result=>{
        this.charlas = result;        
        this.RenderEventsCalendar();
      });
    },
    RenderEventsCalendar(){
      this.charlas.forEach(charla => {      
        const inputDate = new Date(charla.fechaCharla);
        const year = inputDate.getFullYear();

        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
        const day = String(inputDate.getDate()).padStart(2, '0');
        const formattedDateString = `${year}-${month}-${day}`; // yyyy-mm-dd

        var event =
        {
          start: formattedDateString,
          end: formattedDateString,
          title: charla.descripcionCharla,                       
        }
        event = Object.assign(event, charla);         
        this.events.push(event);
      });      
    },
    ShowDialog(event, e){
      this.selectedEvent = event
      this.showDialog = true
      e.stopPropagation()
    }
  },
  mounted(){
    this.LoadAllCharlas();
    this.RenderEventsCalendar();
  }
}
</script>

<style>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
#dialog {
  padding: 20px;
  border-radius: 8px;
}


/* .vuecal__menu, .vuecal__cell-events-count {
  background-color: #000000;
}
.vuecal__view-btn{
  color: white;
}
.vuecal__title-bar {
  background-color: #31c3e0;
}
.vuecal__cell--today, .vuecal__cell--current {
  background-color: rgba(255, 255, 255, 0.4);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, 0.4);
}
.vuecal__cell--selected:before {
  border-color: rgba(31, 132, 226, 0.5);
}
/* Cells and buttons get highlighted when an event is dragged over it. */
/* .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: rgba(195, 255, 225, 0.5);
}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: rgba(136, 236, 191, 0.25);
}
.vuecal__cell-events-count {
  width: 18px;
  height: 2px;
  color: transparent;
} */ 
</style>