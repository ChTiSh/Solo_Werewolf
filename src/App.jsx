/**
 * ************************************
 *
 * @module  App.jsx
 * @author Chen
 * @date 12.16.2022
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.store);
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
