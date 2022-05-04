import { GET_MASTER_NODE_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const masterinfoactioncreator=()=>async (dispatch)=>{
    try{
       const {data}=await api.getnodes();
       console.log('data:',data);
       dispatch({ type:GET_MASTER_NODE_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    // return{
    //     type:GET_MASTER_NODE_INFO
    // }
}
 