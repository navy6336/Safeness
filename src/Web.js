import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class Webview extends Component {
    render() {
        const {  goBack, getParam} = this.props.navigation
        const url = getParam('url');
        return (
            <View style={{flex:1,width:'100%', height:'100%'}}>
                <WebView source={{uri: url }}/> 
            </View>
        )
    }
}
