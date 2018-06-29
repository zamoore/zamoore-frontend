/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Redirect } from 'react-router';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';
import { signIn } from '../../actions';

const mapStateToProps = (state) => {
  return { isAuthenticated: state.currentUser.isAuthenticated };
};

const mapDispatchToProps = (dispatch) => {
  return { signIn: (credentials) => dispatch(signIn(credentials)) };
};

class ConnectedSignIn extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    if (this.props.isAuthenticated === true) {
      return (<Redirect to="/" />);
    }

    return (
      <section className="SignIn">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </section>
    );
  }
  handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    this.props.signIn({
      email: formData.get('email'),
      password: formData.get('password')
    });
  }
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignIn);

export default SignIn;
