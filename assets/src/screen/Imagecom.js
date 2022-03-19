import React from "react"
import {View,Text, StyleSheet,Image} from "react-native"

const Imagecom =()=>{

return <View style={styles.listStyle}>

<Text style={styles.textStyle} >this is image file</Text>

<Image 

style ={styles.imageStyle}
source={require("../../../assets/pics.jpg")}/>

</View>


};

const styles =StyleSheet.create({

    listStyle:{

        height:500,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },


    textStyle:{

   fontSize:30,
   textAlign:"center",
   marginTop:40
   

    },
    imageStyle:{

  width:300,
  height:300,

    }



})


export default Imagecom;