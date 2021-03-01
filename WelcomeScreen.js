import React from "react";
import { View, Button,ImageBackground,Image,Text, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';

const WelcomeScreen = () => {
  gotoHome=()=>{
  Actions.Home()
}
  return (
    <ImageBackground
        source={require('./assets/home.jpg')}
        style={{width:'100%'},{height:'100%'}}>
    <View style={styles.screenContainer}>
       <Text style={styles.myText}>
        We are always ready to serve
        whether for business or individual services, we provide a competent customer care service, ready to make your experience delightful
       </Text>
      <Button style={styles.mybutton} title="Get Started!"  onPress={this.gotoHome}/>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  mybutton:{
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#fff'
  },
  myText:{
   padding:16,
   color:'white',
   marginBottom:10,
   fontSize:16
    }
});

export default WelcomeScreen;