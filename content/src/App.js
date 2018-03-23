import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  Modal, ModalContent, ModalBlock,
  ModalText, ModalLink, ModalContainer,
  ModalDelete, CloseButton
} from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("app component loaded");
  }

  const display = {
    display: block
  }

  closeModal() {
    console.log("closing modal");
  }
  deleteUrl(url) {
    console.log(url);
    // this.props.dispatch({
    //   type: 'DELETE_URL',
    //   Reposetry: repoList
    // });
    //
    // chrome.storage.sync.set({ReposetryList: repoList}, function() {
    //   console.log('Repositry list is stored to chrome as: ' + repoList);
    // });
  }

  render() {
    const RepoList = this.props.reposetry.Reposetry.map((r, i) => {
      return (
          <ModalBlock>
            <ModalText> {r[0]} </ModalText>
            <ModalLink href={r[1]} target="_blank"> {r[1]} </ModalLink>
            <ModalDelete>x</ModalDelete>
          </ModalBlock>
    )});

    return (
      <Modal>
        <ModalContainer>
          <ModalText> Reposetry: </ModalText>
          <CloseButton>x</CloseButton>
          <ModalContent>
            {RepoList}
          </ModalContent>
        </ModalContainer>
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
