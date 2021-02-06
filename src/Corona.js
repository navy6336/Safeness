import React, { Component } from 'react'
import { SafeAreaView, Text, View ,StyleSheet,Image} from 'react-native'
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import BottomBar from './components/bottomBar'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    
  } from 'react-native-responsive-screen';
import MainScreen from './MainScreen'
import VirusReport from './virusReport'


  var date=new Date();
  var str=date.toISOString('YYYY-MM-dd')
  var sts=str.substring(0,10)
 

export default class Corona extends Component {
    constructor(props) {
        super(props);
        
      }
    
    componentDidMount(){
       
        this.bahadir();
       
     

    }
    componentWillUnmount(){
        this.bahadir();
    }
    
   
    
    state={
        data:[],
        veri:0,
        date:sts,
        countries: 'Turkey',
       
        newData:[]
      
    }
    bahadir = async ()=> {
     

        try{
           if(this.state.countries=="sec"){
               this.setState({countries:"Turkey"})
           }
            const options = {
                method: 'GET',
                url: `https://corona.lmao.ninja/v2/countries/${this.state.countries}?yesterday=true&strict&query`,
               
               
              };
              const {data}=await axios(options)
              this.setState({data})
        } catch (e) {
          
        }
        this.setState({newData:this.state.data.countryInfo})
       
    }


    
    
   
   
    onPickerValueChange=(value, index)=>{
       
        
        this.setState({countries: value},
            ()=>{this.bahadir()});

           
      }
    render() {
       
      
        if(this.state.veri==0){
            return (
                <SafeAreaView style={styles.container}>
                 
                    <View style={styles.pickerView} >
                   
                   
                    <Picker  style={styles.picker}
                        selectedValue={this.state.countries}
                        
                        
                        onValueChange={this.onPickerValueChange}>
                           
                     
                        <Picker.Item label="Turkey" color="black" value="Turkey" />
                        <Picker.Item label="Italy" color="black" value="Italy" />
                       
                        <Picker.Item label="Germany" color="black" value="Germany" />
                     </Picker>
                     <Image style={{width:wp('40%'),height:hp('15%')}} source={{uri:`${this.state.newData.flag}`}}></Image>
                    </View>
                    <View style={styles.middleView}>
                    <View style={{...styles.infoView, alignItems:'flex-start',marginLeft:wp('4%')}}>
                      
                        <Text allowFontScaling numberOfLines={1} style={styles.Totaltext} >Toplam Vaka: {this.state.data.active}</Text>
                        <Text allowFontScaling numberOfLines={1} style={styles.Totaltext} >Kritik: {this.state.data.critical}</Text>
                        <Text  allowFontScaling numberOfLines={1} style={styles.Totaltext}>Toplam Ölüm: {this.state.data.deaths}</Text>
                       
                       
                    </View>
                    <View style={{...styles.infoView,alignItems:'flex-start'}}>
                     
                        <Text allowFontScaling numberOfLines={1} style={styles.text} >Günlük Vaka: {this.state.data.todayCases}</Text>
                        <Text allowFontScaling numberOfLines={1} style={styles.text}>Günlük Ölüm: {this.state.data.todayDeaths}</Text>
                        <Text allowFontScaling numberOfLines={1} style={styles.text}>Günlük İyileşenler: {this.state.data.todayRecovered}</Text>
                       
                       
                    </View>
                    </View>
                    <View style={styles.bottomView}>
                        <BottomBar onpress={()=>this.setState({veri:1})} icon={require('../assets/newspaper.png')} text={"News"}></BottomBar>
                        <BottomBar onpress={()=>this.setState({veri:0})} icon={require('../assets/exclamation.png')} text={"DailyCases"}></BottomBar>
                        <BottomBar onpress={()=>this.setState({veri:2})} icon={require('../assets/business-report.png')} text={"Virus Report"}></BottomBar>
                    </View>
                   
                   
                    
                </SafeAreaView>
            )
        }
        else if(this.state.veri==1){
           return(
               <MainScreen></MainScreen>
           )
        }
        else{
            return(
                <VirusReport></VirusReport>
            )
        }
        
        
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#262626'
        
        
    },
    Totaltext:{
        textAlign:'left',
        fontWeight:'bold',
        marginLeft:wp('1%'),
        marginBottom:hp('1%'),
        borderLeftWidth:4,
        borderColor:'orange',
        paddingLeft:wp('2%'),
        color:'white'
    },
    
    picker:{
        
       
        width:wp('40%'),
        color:'white'
        
    },
    text:{
        textAlign:'left',
        fontWeight:'bold',
        marginLeft:wp('1%'),
        borderLeftWidth:4,
        borderColor:'orange',
        marginBottom:hp('1%'),
        paddingLeft:wp('2%'),
        color:'white'
    },
    pickerView:{
        flex:0.5,
        flexDirection:'column',
        alignItems:'center',
       
        marginTop:hp('5%'),
        width:wp('48%'),
     
        
    },
    middleView:{
        flex:3,flexDirection:'row',alignItems:'center', justifyContent:'flex-end',marginHorizontal:wp('1%')
    },
    infoView:{
       
        width:wp('48%'),
        alignItems:'center',
        marginTop:hp('5%'),
    
       
    },
    bottomView:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'flex-end',
        
        justifyContent:'center',
      
    },
});