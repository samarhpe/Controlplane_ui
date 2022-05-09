import { combineReducers } from 'redux';
import Clusterinforeducer from './Clusterinforeducer';
import Masterinforeducer from './Masterinforeducer';
import Workerinforeducer from './Workerinforeducer';
import Podsinforeducer from './Podsinforeducer';
import Servicesinforeducer from './Servicesinforeducer';
import Deplsinforeducer from './Deplsinforeducer';
import Logsinforeducer from './Logsinforeducer';
import Eventsinforeducer from './Eventsinforeducer';
import Crmadminipreducer from './Crmadminipreducer';
const Rootreducer=combineReducers({
    podsinfo:Podsinforeducer,
    masterinfo:Masterinforeducer,
    logsinfo:Logsinforeducer,
    deplsinfo:Deplsinforeducer,
    servicesinfo:Servicesinforeducer,
    eventsinfo:Eventsinforeducer,
    crminfo:Crmadminipreducer,
    
})
export default Rootreducer;
