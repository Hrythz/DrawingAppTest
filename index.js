/** @format */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducers from './src/reducers'

// create redux store and pass reducer
const store = createStore(reducers);

// provider function is to surround the whole app with redux store
const AppContainer = () =>

    // pass store property to provider
    <Provider store={store}>
        <App/>
    </Provider>

AppRegistry.registerComponent('TestProjectOne', () => AppContainer);