import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width} =Dimensions.get('screen');
const ContactScreen = () => {
  return (
    <SafeAreaView style={{
      flex:1, backgroundColor: 'white',
      paddingHorizontal:50,
    }}>

      <View style={{
        marginTop: 50,
        backgroundColor:'white',
        width,
      }}></View>
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color: 'black'
        }}>Contact Us</Text>
        <View style={{
          width:100,
          height: 2,
          backgroundColor:'red',
        }}></View>

        {/* YENAGOA ADDRESS */}
        <View style={{
          marginTop:10,
        }}>
          <Text style={{
            fontSize:20,
            fontWeight:'bold'
          }}>Yenagoa Address</Text>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            letterSpacing:1,
            color: 'grey'
          }}>Isaac Boro Expressway, Kpansia,
            {"\n"}Yenagoa, Bayelsa State.</Text>
        </View>

        {/* ABUJA ADDRESS */}
        <View style={{
          marginTop:10,
        }}>
          <Text style={{
            fontSize:20,
            fontWeight:'bold'
          }}>Abuja Address</Text>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            letterSpacing:1,
            color:'grey'
          }}>
            Off Amadu Bello Way Garki Area II,{"\n"}
            Ibi Close Behind KIA Motors,{"\n"}Abuja State.
          </Text>
        </View>

        <View style={{ marginTop: 20,}}>
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color: 'black'
        }}>Get In Touch</Text>
        <View style={{
          width:100,
          height: 2,
          backgroundColor:'red',
        }}></View>

<View style={{
          marginTop:20,
        }}>
          <Text style={{
            fontSize:20,
            fontWeight:'bold'
          }}>Mobile</Text>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            letterSpacing:1,
            color: 'grey'
          }}>
            +234 (81) 3333 9034{"\n"}
            +234 (80) 3705 7740
          </Text>
        </View>

          {/* EMAILS */}
          <View style={{
          marginTop:20,
        }}>
          <Text style={{
            fontSize:20,
            fontWeight:'bold'
          }}>Emails</Text>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            letterSpacing:1,
            color:'grey'
          }}>
            ayallahotels@yahoo.com{"\n"}
            info@ayallahotels.com
          </Text>
        </View>

          {/*IMAGE */}
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            marginTop:30,
          }}>
          <Image source={require('../images/logo2.png')} resizeMode="contain" />
          <Text style={{
            fontSize: 18,
            fontWeight:'500',
          }}>Mobile Booking</Text>
          <Text>Version 1.0.0</Text>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen;

const styles = StyleSheet.create({})