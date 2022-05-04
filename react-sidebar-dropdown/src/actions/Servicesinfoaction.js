import { GET_SERVICES_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const servicesinfoactioncreator=()=>async (dispatch)=>{
    try{
       const {data}=await api.getservices();
       //console.log('pods:',data);
       dispatch({ type:GET_SERVICES_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}