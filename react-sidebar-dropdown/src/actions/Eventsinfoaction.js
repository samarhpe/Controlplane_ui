import { GET_EVENTS_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const eventsinfoactioncreator=(namespace,depl)=>async (dispatch)=>{
    try{
       const {data}=await api.getevents(namespace,depl);
       //console.log('pods:',data);
       dispatch({ type:GET_EVENTS_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}
 