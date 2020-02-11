import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/stores/configureStore.js'; //Import the store
import Login from './app/components/Login/LoginView' //Import the component file
import Routes from './app/routes/switchNavigator.js';

const store = configureStore();


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}