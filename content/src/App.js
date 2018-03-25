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

    this.state = {
      display: this.props.reposetry.modalToggle
    };

    this.closeModal = this.closeModal.bind(this);
    this.deleteUrl = this.deleteUrl.bind(this);
  }

  componentDidMount() {
    console.log("app component loaded");
  }


  closeModal() {
    this.props.dispatch({
      type: 'TOGGLE_MODAL',
      modalToggle: 'close'
    });
    this.setState({display: this.props.reposetry.modalToggle});
    console.log(this.props);
  }

  deleteUrl(url, i) {
    const Repo = this.props.reposetry.Reposetry;

    Repo.splice(i, 1);

    this.props.dispatch({
      type: 'DELETE_URL',
      Reposetry: Repo
    });

    chrome.storage.sync.set({ReposetryList: Repo});
  }

  render() {
    const RepoList = this.props.reposetry.Reposetry.map((r, i) => {
        return (
            <ModalBlock>
              <ModalText> {r[0]} </ModalText>
              <ModalLink href={r[1]} target="_blank"> {r[1]} </ModalLink>
              <ModalDelete onClick={() => {this.deleteUrl(r, i)}}>x</ModalDelete>
            </ModalBlock>
      )
    });

    return (
      <Modal display={this.props.reposetry.modalToggle === 'display' ? 'block' : 'none'}>
        <ModalContainer>
          <ModalText> Reposetry: </ModalText>
          <CloseButton onClick={this.closeModal}>x</CloseButton>
          <ModalContent>
            {RepoList.length === 0 ? <ModalText> No reposetry stored :O </ModalText> : RepoList }
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
