import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
