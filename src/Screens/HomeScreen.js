import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, View, } from 'react-native';
import React from 'react'

import { Icon } from 'react-native-elements';
import* as Animatable from 'react-native-animatable';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView  style={{flex:1, backgroundColor:'white',}}>
     <View style={{
       backgroundColor: 'red',
       flex: 1,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30,
     }}>
      <TouchableOpacity onPress={()=>{navigation.replace('Welcome')}} 
      style={{
        marginTop:50, 
        alignSelf:'flex-start',
        paddingHorizontal: 20,
        
      }}>
        <Icon type='MaterialIcons' name='arrow-back' color='white' size={25} />
      </TouchableOpacity>

          <Animatable.View animation="slideInLeft">
        <View  style={{ paddingHorizontal: 30, marginTop: 50,  }}>
                <Text style={{fontSize:35, fontWeight:'bold',
                 letterSpacing:2, color: 'black'}}>Enjoy your {"\n"}holidays at {"\n"}Ayalla Hotels Ltd.</Text>
                <Text style={{
                    fontSize:16,
                    marginTop:10,
                    fontWeight: '300',
                    color: 'white',
                }}>Room rates from 25,870 per night.</Text>
                </View>    
                
      </Animatable.View>
      </View>
                 {/* AVAILABITY SEARCH */}
                <Animatable.View 
                animation="fadeInUp"
                style={{ flex:0.8, justifyContent:'center', alignItems: 'center',}}>
                   <TouchableOpacity onPress={()=>navigation.navigate('RoomScreen')} style={{
                     backgroundColor:'black',
                     width: 250,
                     paddingHorizontal: 50,
                     paddingVertical: 20,
                     borderRadius: 30,
                   }}>
                     <Text style={{
                       color: 'white',
                       alignSelf: 'center',
                       fontSize:16,
                       fontWeight:'500',
                       
                     }}>Book A Room</Text>
                   </TouchableOpacity>
                   </Animatable.View>

    <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})