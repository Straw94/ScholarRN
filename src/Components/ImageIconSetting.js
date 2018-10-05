import React, { Component } from 'react';
import { View, Image } from 'react-native';
import common from '../Css/common.js'
import { StyleSheet } from 'react-native';
import resolution from "../Function/scale";

const Styles = StyleSheet.create({
    ...common
});

export default class ImageIconSetting extends Component {
    render() {
        return (
            <View style={[Styles.center, {marginLeft: this.props.left || 0, marginRight: this.props.right || 0}]}>
                <Image style={{width: this.props.width || resolution.scale * 20, height: this.props.width || resolution.scale * 20}} source={require('../assets/images/setting.png')}></Image>
            </View>
        )
    }
}