import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.storeUrl = this.storeUrl.bind(this);
    this.updateUrl = this.updateUrl.bind(this);

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

  updateUrl() {

    console.log("updated this.props", this.props);
    const repoList = 'ReposetryList';

    chrome.storage.sync.get('ReposetryList', (val) => {
      val.ReposetryList.map((m, i) => {
        console.log(m);
      });
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

        chrome.storage.sync.set({ReposetryList: repoList}, function() {
          console.log('Repositry list is stored to chrome as: ' + repoList);
       });

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
    const reposetryList = this.props.reposetry.Reposetry.map((r, i) => {
      return(
      <div>{r}</div>
      )
    });
    return (
      <div style={{width: 200}}>
        <button onClick={this.updateUrl}>update data</button>
        Reposetry: {reposetryList}
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
