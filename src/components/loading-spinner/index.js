/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
/*eslint-enable no-unused-vars*/

class LoadingSpinner extends Component {
  render() {
    return (<FontAwesomeIcon icon={faSync} size="lg" spin />);
  }
}

export default LoadingSpinner;
