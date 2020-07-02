import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class VideoItem extends Component {
    render() {
        let skill = this.props.skill;
        return (
            <View style={styles.container}>
              <View style={{flex:1,justifyContent: 'center',alignItems: 'center',height:120,width:800,backgroundColor:'#bbd9fa'}}>
                <View style={{ flex: 1,flexDirection:'row',marginLeft:50,marginTop:20}}>
                  <Icon name={skill.iconName} size={100} color="#072e59"/>
                  <View style={{flex:1,flexDirection:'column'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#4b80bd'}}>
                      {skill.skillName}
                    </Text>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#72abed'}}>
                      {skill.categoryName}
                    </Text>
                    <Text style={{fontSize:30,fontWeight:'bold',color:'#1b497d'}}>
                      {skill.percentageProgress}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoStats: {
        fontSize: 15,
        paddingTop: 3
    }

});