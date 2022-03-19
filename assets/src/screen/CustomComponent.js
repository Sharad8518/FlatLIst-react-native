import React from "react";
import {Text, StyleSheet}  from "react-native";

const CustomComponent =() =>{

return<Text style={styles.textStyle}>Hello world this my component </Text>

};

const  styles =StyleSheet.create({
textStyle:{
 
  color:"red",
  marginTop:"100px"

},




})
export default CustomComponent ;