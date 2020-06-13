import React from 'react';
import { render } from 'react-dom';
import ReactPlayground from './react-playground';
import * as serviceWorker from './serviceWorker';

import './index.css';

const rootElement = document.getElementById('root');

const createApp = Component => {

    render(
        <React.StrictMode>
          <Component />
        </React.StrictMode>,
        rootElement
    );

}

createApp(ReactPlayground);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();