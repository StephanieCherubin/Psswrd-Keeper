import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Password from './Password';

import reducers from './reducers';


const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Password />
        </div>
      </Provider>
    );
  }
}

export default App;
