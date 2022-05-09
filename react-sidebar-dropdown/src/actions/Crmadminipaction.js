import { GET_CRMADMIN_IP } from "../Actiontypes";
import * as api from '../api/index.js';
export const getcrmadminipactioncreator=()=>async (dispatch)=>{
    try{
       const {data}=await api.getcrmadminip();
       //console.log('pods:',data);
       dispatch({ type:GET_CRMADMIN_IP,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}
 