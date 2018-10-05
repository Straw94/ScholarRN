import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// css样式
import Styles from '../Css/home-container';
// 轮播
import AwesomeProject from "../Components/BannerText";
// redux mixin混入方法
import { connect } from "react-redux";
// 改变背景图
import { changeImage } from "../Redux/Actions/ScreenIndexAction";
// 兼容比例
import resolution from '../Function/scale.js';


class HeaderBodyContainer extends Component {
    render() {
        return (
            <View style={Styles.HomeContainerOuter}>
                <View style={Styles.HomeContainerItem}>
                    <TouchableOpacity onPress={() => this.navigatorTo(1)} style={[Styles.center, Styles.HomeContainerLeft, Styles.HomeContainerBox, {
                        borderTopLeftRadius: resolution.scale * 10}]}>
                        <View style={Styles.center}>
                            <View style={[Styles.center, Styles.ImageItemOuter]}>
                                <Image
                                    style={{width: resolution.scale * 40, height: resolution.scale * 40}}
                                    source={require('../assets/images/skill1.png')}
                                />
                            </View>
                            <Text style={[Styles.white, {fontSize: 15, fontWeight: '900', marginTop: resolution.scale * 20}]}>模块1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigatorTo(2)} style={[Styles.center,Styles.HomeContainerRight, Styles.HomeContainerBox, {
                        borderTopRightRadius: 10}]}>
                        <View style={Styles.center}>
                            <View style={[Styles.center, Styles.ImageItemOuter]}>
                                <Image
                                    style={{width: resolution.scale * 40, height: resolution.scale * 40}}
                                    source={require('../assets/images/skill2.png')}
                                />
                            </View>
                            <Text style={[Styles.white, {fontSize: 15, fontWeight: '900', marginTop: resolution.scale * 20}]}>模块2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.HomeContainerItem}>
                    <TouchableOpacity onPress={() => this.navigatorTo(3)} style={[Styles.center,Styles.HomeContainerLeft, Styles.HomeContainerBox, {
                        borderBottomLeftRadius: resolution.scale * 10}]}>
                        <View style={Styles.center}>
                            <View style={[Styles.center, Styles.ImageItemOuter]}>
                                <Image
                                    style={{width: resolution.scale * 40, height: resolution.scale * 40}}
                                    source={require('../assets/images/skill3.png')}
                                />
                            </View>
                            <Text style={[Styles.white, {fontSize: 15, fontWeight: '900', marginTop: resolution.scale * 20}]}>模块3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigatorTo(4)} style={[Styles.center,Styles.HomeContainerRight, Styles.HomeContainerBox, {
                        borderBottomRightRadius: resolution.scale * 10}]}>
                        <View style={Styles.center}>
                            <View style={[Styles.center, Styles.ImageItemOuter]}>
                                <Image
                                    style={{width: resolution.scale * 40, height: resolution.scale * 40}}
                                    source={require('../assets/images/skill4.png')}
                                />
                            </View>
                            <Text style={[Styles.white, {fontSize: 15, fontWeight: '900', marginTop: resolution.scale * 20}]}>模块4</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={Styles.center}>
                    <View style={Styles.HomeContainerFooter}>
                        <AwesomeProject></AwesomeProject>
                    </View>
                </View>
            </View>
        )
    }
    componentWillMount() {
        // 改变背景图片
        this.props.bgImg(0);
    }
    navigatorTo(status) {
        const navigation = this.props.navigation;
        switch(status) {
            case 1:
                // navigation.navigate('***', { name: '***' });
                break;
            case 2:
                // navigation.navigate('***', { name: '***' });
                break;
            case 3:
                // navigation.navigate('***', { name: '***' });
                break;
            default:
                console.log('nothing')
        }
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    bgImg: (status) => {
        dispatch(changeImage(status))
    }
})

HeaderBodyContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderBodyContainer)
export default HeaderBodyContainer