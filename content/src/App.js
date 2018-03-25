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
      display: 'none'
    };

    this.deleteUrl = this.deleteUrl.bind(this);
  }

  componentDidMount() {
    console.log("app component loaded");
  }


  closeModal() {
    console.log("closing modal");
  }
  deleteUrl(url, i) {
    console.log(url);
    console.log("index", i);
    console.log(this.props.reposetry.Reposetry);
    const Repo = this.props.reposetry.Reposetry;

    Repo.splice(i, 1);
    console.log("new Repo", Repo);

    this.props.dispatch({
      type: 'DELETE_URL',
      Reposetry: Repo
    });

    chrome.storage.sync.set({ReposetryList: Repo}, function() {
      console.log('Repositry list is stored to chrome as: ' + Repo);
    });
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
      <Modal display="block">
        <ModalContainer>
          <ModalText> Reposetry: </ModalText>
          <CloseButton>x</CloseButton>
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
