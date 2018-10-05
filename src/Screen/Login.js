import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginContainer from '../Containers/LoginContainer'
import styles from '../Css/main-page'

class Login extends Component {
    render() {
        return (
            <View style={styles.MainScreen}>
                <LoginContainer {...this.props}></LoginContainer>
            </View>
        )
    }
}

export default Login
