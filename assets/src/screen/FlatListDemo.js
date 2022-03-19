import React from 'react'
import {View,Text,StyleSheet,FlatList}from "react-native"


function FlatListDemo() {

    const names=[
{
    index:"1",
    name:"Pavan",
},

{
    index:"2",
    name:"Durgesh",
},

{
    index:"3",
    name:"Pankaj",
},


{
    index:"4",
    name:"ishan",
},

{
    index:"5",
    name:"Harish",
},

{
    index:"6",
    name:"sanjay",
},

{
    index:"7",
    name:"sarans",
},

{
    index:"8",
    name:"ayushman",
}


    ]


  return (
  <FlatList
  keyExtractor={(key)=>{

    return key.index;

  }}
showsHorizontalScrollIndicator={false}
//   horizontal
//  numColumns={2}
inverted
   data={names}
  renderItem={({item})=>{
    console.log(item.name);
return (
<Text style={styles.textStyle}>{item.name}</Text>
)
  }}
/>



  )
}
const styles =StyleSheet.create({

textStyle:{

    fontSize:40,
    padding:10,
    backgroundColor:"#000",
    color:"#fff",
    marginLeft:20,
    marginTop:20
}



});



export default FlatListDemo