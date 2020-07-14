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
      borderWidth:width/36
     },
     form:{
      borderWidth:1,
      width:width,
     },
     input:{
      borderWidth:1,
      width:100
     },
     img:{
      borderWidth:50,
      width:100,
      height:100,
      resizeMode:'cover'
    },
    button:{
      width:20
    }
})