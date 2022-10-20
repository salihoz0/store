import { StyleSheet,Dimensions } from "react-native"


export default StyleSheet.create({
    container:{
        padding:5,
        border:10,
        borderRadius:10,

    }, 
    image:{
        width:'100%',
        height:'70%',
        resizeMode:'stretch',
        borderRadius:10
        
        
    },

    inner_container:{
        width:Dimensions.get('screen').width/2.11,
        height:Dimensions.get('screen').height/3,
        padding:10,
        borderRadius:10,
        backgroundColor:'#eeeeee'

    },
    title:{
        fontWeight:'bold',
        color:'black'
    },
    price:{
        fontWeight:'700',
        color:'#9e9e9e'
       
    },
    noStock:{
        fontSize:20,
        color:'red',
        fontWeight:'bold',
    }


})