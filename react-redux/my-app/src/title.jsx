import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
        <h1 style={{ color: this.context.themeColor }} >我的REDUX</h1>
    );
  }
}

export default Title;