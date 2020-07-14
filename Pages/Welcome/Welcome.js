import React from 'react';
import {Image,View,Text,StyleSheet,Dimensions,Button,TouchableOpacity} from 'react-native'

var x;
const {width,height}=Dimensions.get('screen')

class Welcome extends React.Component{
	
	constructor(){
		super();
		this.state={
			message:'',
			message1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae est cupiditate sequi ex dolore voluptas, quidem.',
			message2:'delectus optio ipsa aperiam ipsum suscipit quia vitae ullam ipsam velit iste, soluta et ',
			message3:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, hic nemo aliquam error, quo commodi delectus eum ',
			color:'red',
			display:'none'
		}
	}
    setTexte(value,display){
    	this.setState({message:value})
    	this.setState({color:value})
        this.setState({display:display})
    }
    componentDidMount(){
       x=setTimeout(()=>this.setTexte(this.state.message1,'none'),4000)
       x=setTimeout(()=>this.setTexte(this.state.message2,'none'),10000)
       x=setTimeout(()=>this.setTexte(this.state.message3,'block'),15000)
    }
    componentWillMount(){
    	clearTimeout(x)
    }
	render(){
		return(
			<View style={styles.container}>
               <View style={styles.logo}>
               	    <Image style={styles.img}
                      source={require('../../assets/logo.png')}
                    />
               </View>
               <View style={styles.Text}>
               	  <Text style={styles.text}>{this.state.message}</Text>
               	  <View style={styles.bules}>
               	  	<View 
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative'}}
               	  	>
               	  	</View>               	  	
               	  	<View 
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative'}}
               	  	>
               	  	</View>               	  	
               	  	<View 
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative'}}
               	  	>
               	  	</View>
               	  </View>
               </View>
               <View>
                   <TouchableOpacity
                      style={styles.bouton}
                      onPress={()=>console.log('appuyer')}
                   >
                      <Text style={{textAlign:'center'}}>Commencer</Text>     
                   </TouchableOpacity>
               </View>
			</View>
	    )
	}
}
export default Welcome;


const styles=StyleSheet.create({
    container:{
    	marginBottom:0,
       flex:1,
       flexDirection:'column',
       marginTop:50,
       justifyContent:'center'
    },
    logo:{
        marginLeft:width/2-20
    },
    Text:{
        width:300,
        marginLeft:30,
        marginTop:100,
        height:100,

    },
    text:{
        textAlign:'center'
    },
    bouton:{
    	marginTop:150,
    	borderWidth:1,
    	width:100,
    	backgroundColor:'lightblue',
    	borderRadius:10,
    	paddingBottom:5,
    	marginLeft:width/2-50
    },
    img:{
    	width:50,
    	height:50
    },
    bules:{
    	flex:1,
    	flexDirection:'row',
        marginTop:100,
        position:'absolute',
    	justifyContent:'space-around',
    	height:20,
    	width:50,
    	marginLeft:width/2-50
    }
})
