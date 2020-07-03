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
import data from './skillData.json';
import SkillItem from './components/SkillItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{ width: 400, height: 50 , marginTop: 40}} />
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',height:70}}>
          <View style={{ flex: 1,flexDirection:'row',marginLeft:50,marginTop:20}}>
            <Image source={require('./images/foto.jpg')} style={{ width: 50, height: 50 ,borderRadius: 50/2}} />
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={styles.textJob}>
                Hai
              </Text>
              <Text style={styles.textName}>
                Mochamad Yusuf
              </Text>
            </View>
          </View>
        </View>
        <View style={{height:40,marginLeft:50}}>
          <Text style={{fontSize:35,fontWeight:'bold'}}>
            Skill
          </Text>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <FlatList
              data={data.items}
              renderItem={(video)=><SkillItem skill={video.item} />}
              keyExtractor={(item)=>item.id.toString()}
              ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}
              />
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