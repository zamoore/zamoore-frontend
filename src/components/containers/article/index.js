/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledArticle = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    return (
      <StyledArticle className='Article'>
        <h1>Article</h1>
      </StyledArticle>
    );
  }
  componentDidMount() {
    const { match: { params } } = this.props;


  }
}

export default Home;
