import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions ,
  TextInput,
  Button 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.buttonTitle}>
          Halaman Tambah
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar:{
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000'
  },
  textName:{
    fontSize:20,
    fontWeight:'bold',
    color:'#4b80bd'
  },
  textJob:{
    fontSize:15,
    fontWeight:'bold',
    color:'#325a87'
  },
  item:{
    margin:20,
    height:100,
    backgroundColor:'#c2c9d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    fontSize:15,
  },
  Portofolio:{
  },
});