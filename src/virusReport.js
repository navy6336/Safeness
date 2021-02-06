import React, { Component } from 'react'
import { Text, SafeAreaView ,StyleSheet,View,TextInput,Button} from 'react-native'
import Checkbox from 'expo-checkbox';
import BottomBar from './components/bottomBar'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    
  } from 'react-native-responsive-screen';
  import Checkboxt from './components/checkbox'
  import MainScreen from './MainScreen'
  import Corona from './Corona'

export default class VirusReport extends Component {
    state={
        ates:false,
        oksuruk:false,
        yorgunluk:false,
        tat:false,
        bas:false,
        agri:false,
        kronik:false,
        veri:0
    }
    
    
    render() {
        let ad;
       
        let soyad;
        let tc;
        if(this.state.veri==0){
            return (
                <SafeAreaView style={styles.container}>
                   
                    <TextInput placeholder="TC Kimlik No" placeholderTextColor='white'
                        style={{width:wp('70%') , height: 40, borderColor: 'gray', borderWidth: 3 ,marginTop:hp('5%'),padding:10 ,}}
                      
                        value={tc}
                                     />
                   <View style={{flex:1,}}>
                    <View style={styles.inputArea}>
                    <TextInput placeholder="Ad" placeholderTextColor='white'
                        style={{width:wp('30%') ,padding:10 , marginHorizontal:wp('5%'), height: 40, borderColor: 'gray', borderWidth: 1 }}
                    
                        value={ad}
                                     />
                                     <TextInput  placeholder="Soyad" placeholderTextColor='white'
                        style={{width:wp('30%') ,padding:10 , marginHorizontal:wp('5%'), height: 40, borderColor: 'gray', borderWidth: 1 }}
                   
                        value={soyad}
                                     />
                    
                    </View>
                    <View style={styles.infoArea}>
                        <Checkboxt width={wp('40%')} value={this.state.ates} onValueChange={()=>this.setState({ates: !this.state.ates})} text="Ateş"></Checkboxt>
                        <Checkboxt  width={wp('40%')} value={this.state.oksuruk} onValueChange={()=>this.setState({oksuruk: !this.state.oksuruk})} text="Öksürük"></Checkboxt>
                        
                    </View>
                    <View style={styles.infoArea}>
                    <Checkboxt  width={wp('40%')}  value={this.state.yorgunluk} onValueChange={()=>this.setState({yorgunluk: !this.state.yorgunluk})} text="Yorgunluk"></Checkboxt>
                        <Checkboxt  width={wp('40%')} value={this.state.tat} onValueChange={()=>this.setState({tat: !this.state.tat})} text="Tat ve Koku kaybı"></Checkboxt>
                        
                    </View>
                    <View style={styles.infoArea}>
                    <Checkboxt  width={wp('40%')} value={this.state.bas} onValueChange={()=>this.setState({bas: !this.state.bas})} text="Baş Ağrısı"></Checkboxt>
                        <Checkboxt  width={wp('40%')} value={this.state.agri} onValueChange={()=>this.setState({agri: !this.state.agri})} text="Ağrı ve Sızı"></Checkboxt>
                        
                    </View>
                    <View style={styles.infoArea}>
                        <Checkboxt value={this.state.kronik} onValueChange={()=>this.setState({kronik: !this.state.kronik})}  width={wp('60%')} text="Kronik Hastalığı var mı?"></Checkboxt>
                    </View>
                        <Button onPress={()=>alert('Bilgiler Gönderildi')} title="Gönder"></Button>
                    </View>
                    <View style={styles.bottomView}>
                            <BottomBar onpress={()=>this.setState({veri:1})} icon={require('../assets/newspaper.png')} text={"News"}></BottomBar>
                            <BottomBar onpress={()=>this.setState({veri:2})} icon={require('../assets/exclamation.png')} text={"DailyCases"}></BottomBar>
                            <BottomBar onpress={()=>this.setState({veri:0})} icon={require('../assets/business-report.png')} text={"Virus Report"}></BottomBar>
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
                <Corona></Corona>
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
    infoArea:{
       
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:hp('5%'),
        flexDirection:'row',
        width:wp('50%'),
        height:50,
    
       
        

    },
    bottomView:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'flex-end',
       
       
       
    },
    inputArea:{
        flexDirection:'row',
        marginTop:hp('5%'),
        alignItems:'center'
    }
})