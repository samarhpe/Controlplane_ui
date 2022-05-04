import { GET_LOGS_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const logsinfoactioncreator=(namespace,pod)=>async (dispatch)=>{
    try{
       const {data}=await api.getlogs(namespace,pod);
       //console.log('pods:',data);
       dispatch({ type:GET_LOGS_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}