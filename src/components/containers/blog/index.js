/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBlog = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Blog extends Component {
  render() {
    return (
      <StyledBlog className='Blog'>
        <h1>Blog</h1>
      </StyledBlog>
    );
  }
}

export default Blog;
