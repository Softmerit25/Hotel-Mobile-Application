import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';


const {width, height} =Dimensions.get('screen');
const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', }}>
    <View  style={{ height:'100%', width: width, justifyContent:'center', marginTop: 50,}}>
    
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({})