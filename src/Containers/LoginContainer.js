import React, { Component } from 'react';
import { 
    Alert,
    View,
    BVLinearGradient, // 不引入的话 渐变插件报错
    Image, 
    TouchableOpacity, 
    TextInput, 
    Text 
} from 'react-native';

// loading 组件 --- 网上随便找的...
import { Loading } from '../Components/index'

// 样式
import Styles from '../Css/login-container';
// 渐变插件
import LinearGradient from 'react-native-linear-gradient';
// 退出插件
import RNExitApp from 'react-native-exit-app';


// dispatch redux的方法
import { loginAction } from '../Redux/Actions/LoginAction'
import { changeImage } from '../Redux/Actions/ScreenIndexAction'

// 混入 类似mixin
import { connect } from "react-redux";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        // 账号密码
        this.state = {
            username: '',
            password: '',
        };
    }

    // react-native生命周期推荐 https://www.jianshu.com/p/c21e0314beef
    componentWillMount() {
        // 通过redux 全局更改背景图片
        this.props.bgImg(0);
    }
    
    // props 更新
    componentWillReceiveProps() {
        setTimeout(() => {
            this.props.isLoading ? '' : this.callbackFn(this.props.states)
        }, 0)
    }

    componentDidUpdate() {
        // console.log('update');
    }
    render() {
        return (
            <View style={Styles.LoginContainerOuter}>
                {
                    this.props.isLoading == true ? <Loading /> : null
                }
                <TouchableOpacity style={Styles.Close} onPress={() => RNExitApp.exitApp()}>
                    <Image source={require("../assets/images/close.png")}></Image>
                </TouchableOpacity>
                <View style={[Styles.center, Styles.Company]}>
                    <Image source={require("../assets/images/company-icon.png")}></Image>
                </View>
                <View style={Styles.TextInputCenter}>
                    <View style={[Styles.TextInputOuter, Styles.Username]}>
                        <View style={[Styles.TextInputIcon, Styles.center]}>
                            <Image source={require('../assets/images/username.png')}></Image>
                        </View>
                        <View style={Styles.center}>
                            <TextInput
                                style={[Styles.TextInput]}
                                placeholder={'请输入手机号'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.2)'}
                                onChangeText={(text) => this.setState({username: text})}
                                value={this.state.username}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <View style={[Styles.TextInputOuter, Styles.Password]}>
                        <View style={[Styles.TextInputIcon, Styles.center]}>
                            <Image source={require('../assets/images/password.png')}></Image>
                        </View>
                        <View style={Styles.center}>
                            <TextInput
                                textContentType={'password'}
                                style={[Styles.TextInput]}
                                placeholderTextColor={'rgba(255, 255, 255, 0.2)'}
                                placeholder={'请输入密码'}
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[Styles.Submit]} onPress={() => this.Login()}>
                        <LinearGradient style={[{flex: 1, borderRadius: 20}, Styles.center]} colors={['#444444', '#000000']}>
                            <Text style={{fontSize: 17, letterSpacing: 5, color: 'white'}}>登录</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.userRegiste()}>
                        <View style={Styles.BottomWord}>
                            <Text style={Styles.RegisteWord}>
                                没有账号，立即注册
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[Styles.BottomWordOuter]}>
                        <TouchableOpacity style={[Styles.BottomLeftWord]}>
                            <View style={[Styles.BottomWord]}>
                                <Text style={{color:'white'}}>
                                    用户须知
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:1, backgroundColor: 'white'}}></View>
                        <TouchableOpacity style={[Styles.BottomRightWord]}>
                            <View style={[Styles.BottomWord]}>
                                <Text style={{color:'white'}}>
                                    忘记密码
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    userRegiste() {
        // 跳转到注册页面
        // this.props.navigation.navigate('***', { name: '***' });
    }

    // 登录
    Login() {
        this.props.login(this.state)
    }

    // 登录请求回调
    callbackFn(data) {
        console.log(data);
        
        if(data.status == 'success') {
            this.props.navigation.navigate('Home', { name: 'Home' });
        } else {
            Alert.alert(
                '提示信息',
                data.data.msg,
                [
                  {text: '确认' },
                ],
                { cancelable: false }
            )
        }
    }


}


const mapStateToProps = (state) => ({
    states: state.LoginReducer,
    isLoading: state.LoginReducer.loading
})
const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(loginAction(user)), // 通过redux dispatch触发reducer
    bgImg: (status) => {
        dispatch(changeImage(status))
    }
})

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

export default LoginContainer