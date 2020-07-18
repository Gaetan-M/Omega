import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {TouchableOpacity,Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './Style.js'
import AppNavigator from '../../Navigation/AppNavigator'

const {width,height}=Dimensions.get('screen')
class Login extends React.Component{
  
  constructor(){
      super();
      this.state={
        isEnabled:false,
        display:'flex',
        text:'Bienvenu dans l appli veuillez vous inscrire maintenant'
      }
  }
  execute(){
    this.props.navigation.navigate('Main')
  }
  displayHearder(){
   return(
      <View style={styles.header}>
            <Image style={styles.img}
                      source={require('../../assets/logo.png')}
            /> 
            <Text style={{width:200,textAlign:'center',marginLeft:width/4}}>{this.state.text}</Text> 
      </View> 
    )
  }
  displayForm(){
    return(
      <View style={styles.form}>
        <View style={styles.inputView}>         
          <TextInput style={styles.input}></TextInput>
            <Image style={styles.logo}
                      source={require('../../assets/email.png')}
            />
        </View>        
        <View style={styles.inputView}>         
          <TextInput style={styles.input}></TextInput>
            <Image style={styles.logo}
                      source={require('../../assets/user.png')}
            />          
        </View>        
        <View style={styles.inputView}>
          <TextInput style={styles.input}></TextInput>
            <Image style={styles.logo}
                      source={require('../../assets/phone.png')}
            />          
        </View>        
      </View> 
    )
  }
  render(){

  	return(
      <ScrollView style={styles.container}>
        {this.displayHearder()}
        {this.displayForm()}
{/*        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        onValueChange={(value)=>this.setState({isEnabled:value})}
        value={this.state.isEnabled}
         />*/}
          <TouchableOpacity
                      style={{
                    marginTop:50,
                    borderWidth:1,
                    width:200,
                    backgroundColor:'lightblue',
                    borderRadius:20,
                    paddingTop:5,
                    marginLeft:width/4,
                    height:40,
                    display:this.state.display
                      }}
                            onPress={()=>this.execute()}
                         >
                      <Text style={{textAlign:'center',color:'white'}}>Sign Up</Text>     
          </TouchableOpacity>
      </ScrollView>    
    )
  }
}
export default Login;
