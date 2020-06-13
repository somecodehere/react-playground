import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import Timer from './components/Timer';

import './style.css';

class ReduxApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="ReduxApp">
          <h1>ReduxApp</h1>
          <Timer />
        </div>
      </Provider>
    );
  }

}

export default ReduxApp;
