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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{ width: 400, height: 50 , marginTop: 40 }} />
        </View>
        <View style={styles.input}>
          <Text style={styles.titleInput}>Username</Text>
          <TextInput
            style={styles.textInput}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonItem}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTitle}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:30}}>
            Atau
          </Text>
        </View>
        <View style={styles.buttonItem}>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonTitle}>
              Daftar
            </Text>
          </TouchableOpacity>
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
    marginBottom:20
  },
  input:{
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  titleInput:{

  },
  textInput:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    padding:10,
    backgroundColor: '#e3e1e1'
  },
  buttonItem:{
    alignItems: 'center',
    justifyContent: 'center',
    margin:20
  },
  buttonLogin:{
    backgroundColor: '#0f85bf',
    width:120,
    padding:5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonRegister:{
    backgroundColor: '#054b9c',
    width:120,
    padding:5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonTitle:{
    fontSize:30,
    color:'#FFF'
  }
});