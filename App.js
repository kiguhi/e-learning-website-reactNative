import React, { Component } from 'react';
import Routes from './Routes.js'
import { enableScreens } from 'react-native-screens';

enableScreens();

class App extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default App