import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './App.js';

const proxyStore = new Store({portName: 'reposetry'});

const anchor = document.createElement('div');
anchor.id = 'reposetry-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);



proxyStore.ready().then(() => {
  console.log("proxy ready")
  render(
    <Provider store={proxyStore}>
      <App />
    </Provider>
   , document.getElementById('reposetry-anchor'));
});
