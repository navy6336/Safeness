import React, { Component } from 'react'
import {  View,StyleSheet,FlatList,TouchableOpacity,Text, Image, SafeAreaView } from 'react-native'

import axios from 'axios';
import BottomBar from './components/bottomBar'
import VirusReport from './virusReport'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    
  } from 'react-native-responsive-screen';


import Corona from './Corona';



export default class MainScreen extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            veri:0,
            url:'',
           
        }
    }
    
    componentDidMount(){
     
        this.newsApi();

    }
    componentWillUnmount(){
        this.newsApi();
    }
    

    newsApi = async()=>{
        
        const {data: {articles:data}} = await axios.get('http://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=23b292968bec448ba6a6b84605417509')
        
        this.setState({
            data
        })
    }
    renderItems = ({item,index}) => {
        const { navigate , push, goBack} = this.props.navigation
        const url =item.url
        
        return(
            <TouchableOpacity onPress={()=> navigate('Detail',{url})} style={styles.itemContainer}>
                <Image resizeMode="stretch" style={{width:wp('25%'),height:hp('13%'),  borderRadius:20}}
            source={{uri:item.urlToImage}}></Image>
                <View style={{alignItems:'flex-start',width: wp('65%'),height:'100%',marginLeft:wp('2%')}}>
                        <Text style={{textAlign:'center',color:'white'}} >{item.title}</Text>
                </View>
               
            </TouchableOpacity>
        );
    };
    

    render() {
       
        if (this.state.veri ==0){
            return (
                <SafeAreaView style={styles.container}>
                    <FlatList
                        contentContainerStyle={{marginTop:hp('3%'),marginHorizontal:wp('1%')}}
                        data={this.state.data}
                        renderItem={this.renderItems}
                        keyExtractor={item=> item.id}
    
                    />
                   
                    <View style={styles.bottomView}>
                        <BottomBar onpress={()=>this.setState({veri:0})} icon={require('../assets/newspaper.png')} text={"News"}></BottomBar>
                        <BottomBar onpress={()=>this.setState({veri:1})} icon={require('../assets/exclamation.png')} text={"DailyCases"}></BottomBar>
                        <BottomBar onpress={()=>this.setState({veri:2})} icon={require('../assets/business-report.png')} text={"Virus Report"}></BottomBar>
                    </View>
                   
                </SafeAreaView>
            )
        }
        else if (this.state.veri==1){
            return(
                <Corona screenProps={{url:this.state.url}}></Corona>
            )
        }
      
        else{
            return(
                <VirusReport></VirusReport>
            )
        }
      
        
    }
  
    
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#262626'
        
        
        
    },
    bottomView:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'flex-end',
       
        justifyContent:'center',
       
    },
    itemContainer: {
     
        flex:1,
        marginLeft:wp('1%'),
        marginRight:wp('1%'),
        marginVertical:hp('1%'),
        alignItems:'flex-start', 
        flexDirection:'row',
        backgroundColor:'#404040',
        borderRightWidth:3,borderRightColor:'orange',borderTopLeftRadius:10,
        borderBottomLeftRadius:10
     
      
    
          
      },
})