import React, { Component } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';

import HomeHeader from './Header/HomeHeader'
import HomeContainer from '../Containers/HomeContainer'


class Home extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={{flex:1,zIndex: -10}}>
                <HomeHeader navigation={this.props.navigation}></HomeHeader>
                <HomeContainer {...this.props}></HomeContainer>
            </View>
        )
    }
}

export default Home