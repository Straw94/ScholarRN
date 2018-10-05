import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, View, Text,StatusBar, StyleSheet, Image } from 'react-native'
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";

// 组件
import { ImageIconSetting } from '../Components';
// css样式
import common from "../Css/common";

// 页面
import Login from '../Screen/Login';
import Home from '../Screen/Home';


// 比例兼容
import resolution from '../Function/scale'


var Dimensions = require('Dimensions');
var height = Dimensions.get('window').height;
const Styles = StyleSheet.create({
    NavOuter: {
        height: height - resolution.scale * 30,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    ImageOuter: {
        marginTop: resolution.scale * 20,
        marginBottom: resolution.scale * 20,
    },
    ImageView: {
        borderWidth: 1,
        borderColor: 'white',
        width: resolution.scale * 90,
        height: resolution.scale * 90,
        borderRadius: resolution.scale * 45
    },
    UserName1: {
        fontSize: 17,
        fontWeight: '900'
    },
    UserName2: {
        marginTop: resolution.scale * 13,
        marginBottom: resolution.scale * 18,
        fontSize: 12,
        fontWeight: '900'
    },
    SettingWords: {
        marginLeft: resolution.scale * 22,
        fontSize:15,
        fontWeight: '900',
        lineHeight: 20
    },
    SettingItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: resolution.scale * 30,
    },
    SettingLeft: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    SettingRight: {
        marginRight: resolution.scale * 15,
        marginTop: 1.5,
        width: resolution.scale * 30,
        height: resolution.scale * 17,
        borderRadius: resolution.scale * 5,
        backgroundColor: 'rgba( 255, 255, 255, 0.3 )'
    },
    SettingRightWords: {
        fontSize: 12,
        lineHeight: resolution.scale * 17,
    },
    Version: {
        position: 'absolute',
        bottom: resolution.scale * 21,
        width: resolution.scale * 250,
    },
    ...common
});
export default DrawerNavigator({
    // 登录
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    // 主页
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null
        })
    },
}, {
    drawerWidth: 250, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey: 'Notifications',
        labelStyle: {//标签样式
            // color : 'red',
            height: resolution.scale * 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },
        //没有作用
        onItemPress: (route) => {
            console.log('-------->' + JSON.stringify(route))
        },

    },
    contentComponent: props => {
        return (
            <View style={{ position: 'relative', flex: 1}}>
                <ScrollView style={Styles.NavOuter}>
                        <StatusBar
                            animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                            hidden={false}  //是否隐藏状态栏。
                            backgroundColor={'green'} //状态栏的背景色
                            translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                            barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
                        >
                        </StatusBar>
                        <View style={{ flex: 1}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('PersonInfo', { name: 'PersonInfo' })} style={[Styles.ImageOuter, Styles.center]}>
                            <Image
                                style={Styles.ImageView}
                                source={require('../assets/images/headerImage.jpg')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={[Styles.textCenter, Styles.white, Styles.UserName1]}>Scholar</Text>
                        </View>
                        <View>
                            <Text style={[Styles.textCenter, Styles.white, Styles.UserName2]}>React-Native</Text>
                        </View>
                        <TouchableOpacity style={Styles.SettingItem}>
                            <View style={Styles.SettingLeft}>
                                <ImageIconSetting left={resolution.scale * 30}></ImageIconSetting>
                                <Text style={[Styles.SettingWords, Styles.white]}>随便1</Text>
                            </View>
                            <View style={[Styles.SettingRight, Styles.white]}>
                                <Text style={[Styles.SettingRightWords, Styles.white, Styles.textCenter]}>6</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.SettingItem}>
                            <View style={Styles.SettingLeft}>
                                <ImageIconSetting left={resolution.scale * 30}></ImageIconSetting>
                                <Text style={[Styles.SettingWords, Styles.white]}>随便2</Text>
                            </View>
                            <View style={[Styles.SettingRight, Styles.white]}>
                                <Text style={[Styles.SettingRightWords, Styles.white, Styles.textCenter]}>10</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.SettingItem}>
                            <View style={Styles.SettingLeft}>
                                <ImageIconSetting left={resolution.scale * 30}></ImageIconSetting>
                                <Text onPress={() => props.navigation.navigate('SystemSetting', { name: 'SystemSetting' })} style={[Styles.SettingWords, Styles.white]}>系统设置</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={[Styles.Version]}>
                    <Text style={[Styles.white, {flex: 1, textAlign: 'center'}]}>版本号：V1.0</Text>
                </View>
            </View>
        )
    }
})

// this.props.navigation.goBack()