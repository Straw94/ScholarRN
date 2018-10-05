import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import common from '../Css/common.js'
import { StyleSheet } from 'react-native';
import resolution from "../Function/scale";

const Styles = StyleSheet.create({
    ...common
});

export default class ImageIconSetting extends Component {
    render() {
        return (
            <View style={[Styles.center, {marginLeft: this.props.left || 0, marginRight: this.props.right || 0, position:'relative'}]}>
                <View style={{
                    width: resolution.scale * 17,
                    height: resolution.scale * 17,
                    backgroundColor: 'red',
                    borderRadius: resolution.scale * 17,
                    color: 'white',
                    position: 'absolute',
                    top: -resolution.scale * 5,
                    left: resolution.scale * 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{color: 'white'}}>{this.props.count}</Text>
                </View>
                <Image style={{zIndex: -1,width: this.props.width || resolution.scale * 20, height: this.props.width || resolution.scale * 20}} source={require('../assets/images/message.png')}></Image>
            </View>
        )
    }
}