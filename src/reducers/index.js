import { combineReducers } from 'redux';
import HelloReducer from './helloReducer';

export default combineReducers({
    hello: HelloReducer
})