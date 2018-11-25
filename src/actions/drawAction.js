import { ADD_PATH } from '../utils/path';

/*
export const getDisplayPaths = (store) => {
    console.log('inside const getDisplayPaths...');
    console.log('paths: ' + store.paths);
    console.log('currentStep: ' + store.currentStep);

    const paths = store.paths;
    const currentStep = store.currentStep;
    const difference = paths.length - currentStep;
    console.log(`total length: ${paths.length}, currentStep: ${currentStep}`);
    if (paths.length !== currentStep) {
        return paths.slice(0, -difference);
    }
    return paths;
};
*/

// exports paths & currentStep variables fetched from drawReducer
export const getActualPaths = (store) => store.Draw.paths;
export const getCurrentStep = store => store.Draw.currentStep;

export const addPath = path => ({
    type: ADD_PATH,
    path
});
