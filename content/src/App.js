import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import Reposetry from './components/reposetry';
import './App.css';

class App extends Component {

  const proxyStore = new Store({portName: 'reposetry'});

  const anchor = document.createElement('div');
  anchor.id = 'reposetry-anchor';

  document.body.insertBefore(anchor, document.body.childNodes[0]);

  proxyStore.ready().then(() => {
    render(
      <Provider store = {proxyStore}>
        <Reposetry/>
      </Provider>
      , document.getElementById('reposetry-anchor'));
  });

}

export default App;
