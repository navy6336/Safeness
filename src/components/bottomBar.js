import React, { Component } from 'react'
import { Text, Image,TouchableOpacity, StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    
  } from 'react-native-responsive-screen';
  

export default class BottomBar extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onpress} style={styles.buton}>
                <Image resizeMode="stretch" source={this.props.icon} style={styles.image}></Image>
                <Text  allowFontScaling numberOfLines={1} style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    buton:{
        width:wp('33.3%'),
        height:hp('13%'),
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange',
        borderTopWidth:1,
        borderColor:'grey',
        
       

    },
    image:{
        width:wp('10%'),
        height:hp('5%'),
        marginBottom:hp('1%')
    },
    text:{
       
        color:'black'
    }
})