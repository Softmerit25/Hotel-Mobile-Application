import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { WebView } from 'react-native-webview';

import { Icon } from 'react-native-elements';
import {View, Text, ScrollView, StyleSheet, Dimensions, RefreshControl, TouchableOpacity} from 'react-native';


const Rooms = ({ isRefresh, onRefresh, ...webViewProps }) => {
  const [height, setHeight] = useState(Dimensions.get('screen').height);
  const [isEnabled, setEnabled] = useState(typeof onRefresh === 'function');
  return(
    <ScrollView
    onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
    refreshControl={
      <RefreshControl
        onRefresh={onRefresh}
        refreshing={isRefresh}
        enabled={isEnabled}
      />
    }
    style={styles.view}>
    <WebView
      source={{ uri: 'https://www.ayallahotels.com/mobile-book-room/' }}
      {...webViewProps}
      onScroll={(e) =>
        setEnabled(
          typeof onRefresh === 'function' &&
            e.nativeEvent.contentOffset.y === 0
        )
      }
      style={[styles.view, { height }, webViewProps.style]}
    />
  </ScrollView>

  )
}
export default Rooms;

const styles =  StyleSheet.create({
  view: { flex: 1, height: '100%' }
})