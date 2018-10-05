import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Screen from '../Route/index';
import {connect} from "react-redux";

import resolution from '../Function/scale.js'
class ScreenIndex extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { ImageUrl } = this.props;
        return(
            <ImageBackground source={ImageUrl} style={{flex:1}}>
                <View style={[{flex: 1,paddingTop: resolution.scale * 20}]}>
                    <Screen />
                </View>
            </ImageBackground>

        )
    }
}
const mapStateToProps = (state) => ({
    ImageUrl: state.ScreenIndexReducer.image
})

ScreenIndex = connect(mapStateToProps)(ScreenIndex)

export default ScreenIndex