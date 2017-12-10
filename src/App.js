import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {authReducer, onlineReducer} from './reducers/reducers'
import './App.css';
import {AppContainer} from './containers/appContainer'
import {FirebaseContainer} from './containers/firebaseContainer'

const allReducers= combineReducers({
    authReducer,
    onlineReducer
})

const store = createStore(allReducers);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <AppContainer />
            <FirebaseContainer />
          </div>
        </Provider>
    );
  }
}

export default App;
