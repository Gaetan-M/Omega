import {StyleSheet,Dimensions} from 'react-native';

//recuperation des dimensions de l'ecran du user
const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export const styles=StyleSheet.create({
     container:{
      marginTop:height/7.8+height/15.6,
      flex:1,
      flexDirection:'column'
     },
     header:{
      marginBottom:height/78,
      width:width,
      height:height/3.9,
     },
     form:{
      width:width,
     },
     input:{
      width:width-150
     },
     img:{
      width:100,
      height:100,
      resizeMode:'contain',
      marginLeft:width/3,
      marginTop:height/15
    },
    logo:{
      width:25,
      height:25,
      resizeMode:'contain',
      marginTop:12
    },
    inputView:{
      flex:1,
      flexDirection:'row',
      borderWidth:1,
      width:width-100,
      height:50,
      borderRadius:8,
      marginLeft:width/8,
     marginTop:15 
    }
})