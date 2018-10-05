import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import resolution from "../Function/scale";
const Styles = StyleSheet.create({
    ReportItemBorder: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    ReportItemLabel: {
        justifyContent: 'center',
        height: resolution.scale * 50
    },
    Center: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    LeftWords: {
        color: '#1f487c',
        fontSize: 15
    },
    WordOuter: {
        marginTop: resolution.scale * 5
    },
    Word: {
        fontSize: 12,
        color:'grey'
    },
    IsRead: {
        borderRadius: resolution.scale * 5,
        width: resolution.scale * 5,
        height:resolution.scale * 5,
        marginRight: resolution.scale * 5,
        backgroundColor: 'red'
    }
})
class MessageItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={[Styles.ReportItemBorder,Styles.ReportItemLabel]}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={this.props.isRead ? Styles.IsRead : ''}>
                        </View>
                        <Text style={Styles.LeftWords}>{this.props.title}</Text>
                    </View>
                    <Text style={Styles.Word}>{this.props.date}</Text>
                </View>
                <View style={[Styles.Center, Styles.WordOuter]}>
                    <Text style={Styles.Word}>{this.props.word}</Text>
                </View>
            </View>
        )
    }
}

export default MessageItem