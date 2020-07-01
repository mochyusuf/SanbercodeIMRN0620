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
            Tentang Saya
          </Text>
        </View>
        <View style={styles.navBar}>
          <Image source={require('./images/foto.jpg')} style={{ width: 200, height: 200 , marginTop: 40 ,borderRadius: 200/2, padding:50}} />
        </View>
        <View style={styles.navBar}>
          <Text style={styles.textName}>
            Mochamad Yusuf
          </Text>
          <Text style={styles.textJob}>
            React Native Developer
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.textTitle}>
            Portofolio
          </Text>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'column',alignItems: 'center'}}>
              <Icon name="gitlab" size={50} />
              <Text style={styles.textJob}>
                @mochyusuf
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'column',alignItems: 'center'}}>
              <Icon name="github-circle" size={50} />
              <Text style={styles.textJob}>
                @mochyusuf
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.textTitle}>
            Hubungi Saya
          </Text>
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1,flexDirection:'row',alignItems: 'center',height:50}}>
              <Icon name="facebook-box" size={30} />
              <Text style={styles.textJob}>
                mocha.yusuf.100
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',alignItems: 'center'}}>
              <Icon name="instagram" size={30} />
              <Text style={styles.textJob}>
                mochyusuf_100
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',alignItems: 'center'}}>
              <Icon name="twitter" size={30} />
              <Text style={styles.textJob}>
                mochyusuf100
              </Text>
            </View>
          </View>
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