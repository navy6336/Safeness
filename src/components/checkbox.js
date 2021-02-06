import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Checkbox from 'expo-checkbox';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    
  } from 'react-native-responsive-screen';

export default class Checkboxt extends Component {
   
    render() {
        return (
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', width:this.props.width}}>
               <Checkbox 
               color="white"
               style={{alignItems:'flex-start',}}
               value={this.props.value}
               onValueChange={this.props.onValueChange}>

               </Checkbox>
               <Text allowFontScaling numberOfLines={1} style={{textAlign:'right',color:'white'}}>
                   {this.props.text}
               </Text>
            </View>
        )
    }
}
