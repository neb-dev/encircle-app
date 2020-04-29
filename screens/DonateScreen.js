import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { WebView } from 'react-native-webview';

export default class DonateScreen extends Component {
  constructor(props) {
    super(props);

    // points webview uri to encircle donate website page
    this.state = {
      url: 'https://encircletogether.org/donate'
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        <WebView
          style={{ flex:1 }}
          androidHardwareAccelerationDisabled
          source={{ uri: this.state.url }}
        />
      </SafeAreaView>
    )
  }
};
