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
			color:['white','white','white'],
			display:'none',
			bulleDisplay:'none'
		}
	}
    setTexte(value,display,color){
    	this.setState({message:value})
        switch(color){
        	case 'blue1':
        	 this.setState({color:['blue','white','white']});
        	 this.setState({bulleDisplay:'flex'});
        	break;        	
        	case 'blue2':
        	return this.setState({color:['white','blue','white']});
        	break;        	
        	case 'blue3':
        	 this.setState({color:['white','white','blue']});
        	 this.setState({display:'flex'});
        	break;
        }
    }
    componentDidMount(){
       x=setTimeout(()=>this.setTexte(this.state.message1,'none','blue1'),4000)
       x=setTimeout(()=>this.setTexte(this.state.message2,'none','blue2'),8000)
       x=setTimeout(()=>this.setTexte(this.state.message3,'block','blue3'),12000)
    }

	render(){
		console.log(this.props.navigation)
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
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative',backgroundColor:this.state.color[0],display:this.state.bulleDisplay}}
               	  	>
               	  	</View>               	  	
               	  	<View 
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative',backgroundColor:this.state.color[1],display:this.state.bulleDisplay}}
               	  	>
               	  	</View>               	  	
               	  	<View 
               	  	style={{borderWidth:1,borderRadius:20,width:10,height:10,position:'relative',backgroundColor:this.state.color[2],display:this.state.bulleDisplay}}
               	  	>
               	  	</View>
               	  </View>
                </View>
                <View>
                   <TouchableOpacity
      				        style={{
      				    	marginTop:150,
      				    	borderWidth:1,
      				    	width:100,
      				    	backgroundColor:'lightblue',
      				    	borderRadius:10,
      				    	paddingBottom:5,
      				    	marginLeft:width/2-40,
      				    	display:this.state.display
      				   	    }}
                            onPress={()=>this.props.navigation.navigate('Login')}
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
        marginLeft:width/2-60,
        width:150,
        height:100
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
    img:{
    	width:150,
    	height:100,
    	position:'relative',
    	resizeMode:'contain'
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
