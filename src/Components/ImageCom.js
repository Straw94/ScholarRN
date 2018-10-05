import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

class ImageCom extends Component {

    render(){
        return (
            <Image
                style={{flex: 1}}
                source={{uri: this.props.uri}}
            />
        )
    }
}

export default ImageCom






