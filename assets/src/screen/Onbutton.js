import React from 'react'
import {Text,StyleSheet,View,Alert, Image,Button,TouchableOpacity}from "react-native"
import {  } from 'react-native'


function Onbutton() {
  return (
    <View>

<Text style={styles.textStyle}>Button</Text>

<Button
title="Join Our Discord Server"
onPress={() =>{

    Alert.alert('Button with adjusted color pressed')
}}
disabled
/>

<TouchableOpacity
       
       
      >
        <Text>Press Here</Text>
        <Image  style={styles.imageStyle}
        
         source ={require('../../../assets/pics.jpg')}
        
        />
      </TouchableOpacity>

    </View>
  )
}
const styles =StyleSheet.create({
textStyle:{

    marginTop:200,
    textAlign:"center",
    fontSize:30
},
imageStyle:{
width:200,
height:200


}

})

export default Onbutton