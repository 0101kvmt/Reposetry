import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './App';

const proxyStore = new Store({portName: 'reposetry'});

const anchor = document.createElement('div');
anchor.id = 'reposetry-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

chrome.contextMenus.create({
 title: "Reposetry",
 contexts:["selection"],  // ContextType
 onclick: console.log("hi") // A callback function
});

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App/>
    </Provider>
   , document.getElementById('reposetry-anchor'));
});
