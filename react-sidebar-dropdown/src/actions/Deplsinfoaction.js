import { GET_DEPLS_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const deplsinfoactioncreator=()=>async (dispatch)=>{
    try{
       const {data}=await api.getdepls();
       //console.log('pods:',data);
       dispatch({ type:GET_DEPLS_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}
 