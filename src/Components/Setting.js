import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import resolution from "../Function/scale";
const Styles = StyleSheet.create({
    ReportItemBorder: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    ReportItemLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: resolution.scale * 50
    },
    Center: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    LeftWords: {
        width: resolution.scale * 100,
        color: '#1f487c',
        fontSize: 15
    },
})
class Setting extends Component {
    render() {
        return (
            <View style={[Styles.ReportItemBorder,Styles.ReportItemLabel]}>
                <View style={Styles.Center}>
                    <Text style={Styles.LeftWords}>{this.props.text}</Text>
                </View>
                <View style={[Styles.Center]}>
                    <View>
                        <Image style={{width: resolution.scale * 20, height: resolution.scale * 20}} source={require('../assets/images/right.png')}></Image>
                    </View>
                </View>
            </View>
        )
    }
}

export default Setting