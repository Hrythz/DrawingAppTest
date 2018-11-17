// import { PRESSED_BUTTON } from '../actions/types';

const initialState = {
    helloText: 'Hello!',
    pressedButton: false
    // you can add more variables here
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'PRESSED_BUTTON':
            // ...state means taking the whole object of state except pressedButton
            // return { ...state, pressedButton: true } // only use ...state when not all variable are assign for changes
            // assign pressedButton to true
            return { pressedButton: true, helloText: 'You pressed the button!' };
        default:
            return state;
    }
}