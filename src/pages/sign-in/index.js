/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Redirect } from 'react-router';
/*eslint-enable no-unused-vars*/

import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: !!localStorage.getItem('authToken'),
      error: null
    };
  }
  render() {
    if (this.state.authenticated === true) {
      return (<Redirect to="/" />);
    }

    return (
      <section className="SignIn">
        <form onSubmit={this.signIn.bind(this)}>
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
  async signIn(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    try {
      let resp = await axios.post('http://localhost:8080/api/auth', formData);

      localStorage.setItem('authToken', resp.data);
      this.setState({ authenticated: true });
    } catch(reason) {
      this.setState({ error: reason.message });
    }
  }
}

export default SignIn;
