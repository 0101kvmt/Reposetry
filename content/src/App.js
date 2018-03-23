import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Modal, ModalContent, ModalBlock, ModalText } from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("app component loaded");
  }

  render() {
    const RepoList = this.props.reposetry.Reposetry.map((r, i) => {
      return (
          <ModalBlock>
            <ModalText> {r} </ModalText>
          </ModalBlock>
    )});

    return (
      <Modal>
        <ModalContent>
          <ModalText> Reposetry: </ModalText>
            {RepoList}
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
