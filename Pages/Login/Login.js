import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './Style.js'



class Login extends React.Component{
  
  constructor(){
      super();
      this.state={
        isEnabled:false
      }
  }
  
  displayHearder(){
   return(
      <View style={styles.header}>
        <View style={styles.logoBox}>
           <View style={styles.Logo}></View>
           <Text>Omega</Text>
        </View>     
      </View> 
    )
  }
  displayForm(){
    return(
      <View style={styles.form}>
        <View style={styles.input}> 
          <Text>Email</Text>         
          <TextInput></TextInput>
          <View style={styles.logoEmail}></View>
        </View>        
        <View style={styles.input}> 
          <Text>User</Text>         
          <TextInput></TextInput>
          <View style={styles.logoUser}></View>
        </View>        
        <View style={styles.input}>
          <Text>phone</Text> 
          <TextInput></TextInput>
          <View style={styles.logoPhone}></View>
        </View>        
        <View style={styles.button}>
          <Text>SIGN UP</Text> 
        </View>
      </View> 
    )
  }
  render(){

  	return(
      <ScrollView style={styles.container}>
        {this.displayHearder()}
        {this.displayForm()}
        <View><Text>ImageBackground</Text>
          <Image style={styles.img}
            source={require('../../assets/20860.jpg')}
          />
        </View>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        onValueChange={(value)=>this.setState({isEnabled:value})}
        value={this.state.isEnabled}
         />
      </ScrollView>    
    )
  }
}
export default Login;
