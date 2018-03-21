import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Modal, ModalContent } from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("app component loaded");
  }

  render() {
    return (
      <Modal>
        <ModalContent>
          Reposetry: {this.props.reposetry.Reposetry}
        </ModalContent>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reposetry: state.reposetry
  };
};

export default connect(mapStateToProps)(App);
