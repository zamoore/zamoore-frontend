/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';
import { signOut } from '../../../actions';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userName: state.currentUser.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return { signOut: () => dispatch(signOut()) };
};

class ConnectedHeader extends Component {
  render() {
    let authButton = this.props.isAuthenticated
      ? (<button type="button" onClick={this.props.signOut}>Sign Out</button>)
      : (<Link to='/signin'>Sign In</Link>);

    return (
      <header className="Header">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/articles'>Blog</Link>
          {authButton}
        </nav>
        {this.props.userName !== undefined &&
          <span>{this.props.userName}</span>
        }
      </header>
    );
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);

export default Header;
