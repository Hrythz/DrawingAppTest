import { combineReducers } from 'redux';

import HelloReducer from './helloReducer';

// import drawReducer object and uses DrawReducer as reference
import DrawReducer from './drawReducer';

// exports DrawReducer with Draw as object reference
export default combineReducers({
    Hello: HelloReducer,
    Draw: DrawReducer
})