import React, { Component } from 'react';
import axios from 'axios';

import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/users')
      .then((res) => {
        this.setState({ users: res.data });
      });
  }
  render() {
    return (
      <section className="Home">
        {this.state.users !== null &&
          <ul>
            {this.state.users.map((user) => {
              return <li key={user.id}>{user.email}</li>;
            })}
          </ul>
        }
      </section>
    );
  }
}

export default Home;
