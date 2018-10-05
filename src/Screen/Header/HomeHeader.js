import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../../Css/header-container';


// 组件
import { ImageCom, ImageIconMessage } from '../../Components/index';
// 比例兼容
import resolution from "../../Function/scale";

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.HeaderContainerOuter}>
                <View style={[Styles.HeaderTitleOuter]}>
                    <View style={[Styles.rowCenter, {borderBottomColor:'#353535',borderBottomWidth:1}]}>
                        <View style={Styles.left}>
                            <TouchableOpacity onPress={() => this.navigatorTo(1)} style={Styles.ImageView}>
                                <ImageCom uri={'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=e7c761355dda81cb51e685cd6264d0a4/4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg'}></ImageCom>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.center}>
                            <Text onPress={() => console.log(44444444)} style={{fontSize: 20, width: resolution.scale * 200,color:'white', textAlign: 'center'}}>ScholarRN</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.navigatorTo(2)} style={Styles.right}>
                            <ImageIconMessage count={resolution.scale * 10} width={resolution.scale * 22} height={resolution.scale * 22} right={resolution.scale * 10}></ImageIconMessage>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    navigatorTo(status) {
        const navigation = this.props.navigation;
        switch(status) {
            case 1:
                navigation.navigate('PersonInfo', { name: 'PersonInfo' });
                break;
            case 2:
                navigation.navigate('Message', { name: 'Message' });
                break;
            default:
                console.log('nothing')
        }
    }
}

export default HeaderContainer