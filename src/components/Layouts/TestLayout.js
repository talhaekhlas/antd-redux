import React, { Component } from "react";

import TestTopbar from './TestTopbar'
import TestMiddleContent from './TestMiddleContent'
import TestFooter from './TestFooter'

class TestLayout extends Component {
  render() {
    return (
      <div>
        <TestTopbar/>
        <TestMiddleContent/>
        <TestFooter/>
      </div>
    );
  }
}

export default TestLayout;
