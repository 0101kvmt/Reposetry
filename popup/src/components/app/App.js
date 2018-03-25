import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.storeUrl = this.storeUrl.bind(this);
    this.openModal = this.openModal.bind(this);

  }

  componentDidMount() {
    document.addEventListener('click', () => {
    });
    chrome.storage.sync.get('ReposetryList', (val) => {
      const chromeList = val.ReposetryList;
      const reducerList = this.props.reposetry.Reposetry
      
      if(!chromeList) {
         this.props.dispatch({
           type: 'GET_URL',
           Reposetry: reducerList
         });
       } else {
         this.props.dispatch({
           type: 'GET_URL',
           Reposetry: chromeList
         });
       }
    });

  }

  openModal() {

    this.props.dispatch({
      type: 'TOGGLE_MODAL',
      modalToggle: 'display'
    });
  }

  storeUrl(props) {
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
      if(tabs){
        const tabList = [];
        tabList.push(tabs[0].title, tabs[0].url);

        const repoList = this.props.reposetry.Reposetry;
        repoList.push(tabList);

        this.props.dispatch({
          type: 'ADD_URL',
          Reposetry: repoList
        });
        chrome.storage.sync.set({ReposetryList: repoList});
      }
    }.bind(this));
  }

  deleteUrl() {
    this.props.dispatch({
      type: 'ADD_URL',
      Reposetry: repoList
    });

    chrome.storage.sync.set({ReposetryList: repoList}, function() {
      console.log('Repositry list is stored to chrome as: ' + repoList);
   });
  }

  render() {
    console.log(this.props);
    return (
      <div style={{width: 200}}>
        <button onClick={this.openModal}>ABRIR</button>
        <div onClick={this.storeUrl}>STORE</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reposetry: state.reposetry
  };
};

export default connect(mapStateToProps)(App);
