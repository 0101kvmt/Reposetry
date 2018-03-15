import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
      console.log("hi");
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        if(!tabs){
          console.log("no tabs");
        } if(tabs){
          console.log("tabs", tabs);
          var url = tabs[0].url;
          console.log("inurl", url);
        }
      });
    });
  }

  render() {
    return (
      <div style={{width: 200}}>
        Click Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
