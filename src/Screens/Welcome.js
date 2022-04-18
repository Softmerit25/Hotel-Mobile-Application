import { SafeAreaView, 
  Dimensions, 
  StyleSheet, 
  Text, 
  Image, 
  View, 
  TouchableOpacity,
  ImageBackground} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import * as Animatable from 'react-native-animatable';

const {width, height } =Dimensions.get('screen');

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff", width: width,}}>
      {/*background image */}
        <ImageBackground source={require('../images/bg.jpg')} resizeMode="cover"
        style={{width:width, height:'100%'}}>
        <View  style={{flex:1, backgroundColor:'#000', opacity:0.8,}}>
          <View style={{
            marginTop: 60,
            paddingHorizontal:30,
            flexDirection:'row',
            
          }}>
            {/*logo image */}
          <Image source={require('../images/logo2.png')} 
          resizeMode="contain" 
          style={{width: 50, height: 50,}} />

          {/* logo Text */}
          <Text style={{
            fontSize:25,
            fontWeight: '800',
            color: 'white',
            marginLeft: 10,
          }}>Ayalla Hotels {"\n"}Limited</Text>
          </View>


          {/* Heading Text */}
          <Animatable.View animation="fadeInUpBig" style={{flex: 2, marginTop:100, paddingHorizontal:30,}}>
            <Text style={{
              fontSize:35,
              fontWeight:'bold',
              color: 'white',
              letterSpacing:1,
              
            }}>Experience Luxury {"\n"}a perfect place {"\n"}to stay</Text>
            <Text style={{ fontSize: 16, fontWeight:'300', letterSpacing: 2, 
             marginTop:20, color: 'grey'}}>Explore our beautiful rooms &amp; suites.</Text>
          </Animatable.View>

            {/*button */}
          <Animatable.View animation="fadeInUpBig" style={{paddingHorizontal:50, flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={{backgroundColor:'red', width: '100%', height: 50, 
             borderRadius:30, justifyContent:'center', alignItems:'center'}}>
              <Text style={{
                fontSize:20, letterSpacing:2, fontWeight:'400', color:'white',
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 5,
              }}>Get Started</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        </ImageBackground>
    <StatusBar translucent style="light"/>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({})