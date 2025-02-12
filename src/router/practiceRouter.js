import ModelingComponent from "@/components/practice/ModelingComponent.vue";
import VuetifyComponent from "@/components/practice/VuetifyComponent.vue";
export const practiceRouter =[
  {    
        path:'/practice/vuetify',
        name:'VuetifyComponent',
        component : VuetifyComponent
   },
   {
        path:'/practice/modeling',
        name:'ModelingComponent',
        component : ModelingComponent
   }
]