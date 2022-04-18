import { Dimensions, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, RefreshControl, ScrollView} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';


import Rooms from '../component/Rooms';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const RoomScreen =() => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [rooms, setRooms] = React.useState(<Rooms/>)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setRooms(<Rooms/>);

  }, [refreshing]);

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', }}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1, marginTop:30,}}
      refreshControl={
      <RefreshControl 
      refreshing={refreshing} 
      onRefresh={onRefresh} />
      }>
     <Rooms />
    </ScrollView>
    </SafeAreaView>
  )
}

export default RoomScreen;

const styles = StyleSheet.create({})