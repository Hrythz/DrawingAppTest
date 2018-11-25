import { ADD_PATH } from '../actions';
//import * as Actions from 'actions';

// a method that assigns state.path to new array and state.currentStep to 0
const getDefaultState = () => ({
    paths: [],
    currentStep: 0,
});

function addPath(state, action) {
    console.log('inside drawReducer addPath function...');
    console.log('paths.length: ' + state.paths.length);
    console.log('currentStep: ' + state.currentStep);
    const totalLength = state.paths.length;
    const currentStep = state.currentStep;
    const difference = totalLength - currentStep;
    if (currentStep < totalLength) {
        const cutOffPath = state.paths.slice(0, -difference);
        newPaths = [
            ...cutOffPath,
            action.path,
        ];
    } else {
        newPaths = [
            ...state.paths,
            action.path,
        ];
    }

    // return an object with newPaths as path and currentStep as newPaths length
    return Object.assign({}, {
        paths: newPaths,
        currentStep: newPaths.length,
    });
}

export default (state, action) => {
    console.log('inside drawReducer default...');
    console.log(action.type);

    // if state retrieved is undefined, call getDefaultState method
    if (typeof state === 'undefined') {
        console.log('undefined state...');
        return getDefaultState()
    }

    switch (action.type) {
        case 'ADD_PATH':
            // call addPath method with state and action parameters
            return addPath(state, action);

        default:
            console.log('return default');
            // return current state
            return state;
    }
}
