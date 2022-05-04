import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Rootreducer from "./reducers/Rootreducer";
import Masterinforeducer from './reducers/Masterinforeducer';
const store=createStore(Rootreducer,compose(applyMiddleware(thunk)));
export default store;
