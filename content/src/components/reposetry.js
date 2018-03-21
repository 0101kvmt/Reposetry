import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reposetry extends Component {
  constructor(props)  {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_URL'
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          Reposetry: {this.props.reposetry}
        </p>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reposetry: state.reposetry
  };
};

export default connect(mapStateToProps)(Reposetry);
