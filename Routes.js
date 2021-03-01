import React from 'react'
import { Router, Scene} from 'react-native-router-flux'
import WelcomeScreen from './WelcomeScreen.js'
import Home from './Home'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "WelcomeScreen" component = {WelcomeScreen} initial = {true} hideNavBar={true}/>
         <Scene key = "Home" component = {Home} hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes