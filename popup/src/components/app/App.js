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
  }

  updateUrl() {
    console.log("updated props", this.props);
  }

  storeUrl(props) {
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
      if(tabs){
        var url = tabs[0].url;
        console.log("current Tab url: ", url);
        const repoList = this.props.reposetry.Reposetry;
        repoList.push(url);
        console.log("repo", repoList);
        this.props.dispatch({
          type: 'ADD_URL',
          Reposetry: repoList
        });
      }
    }.bind(this));
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
