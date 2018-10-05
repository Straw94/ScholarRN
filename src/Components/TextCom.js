import React, { Component } from 'react';
import { Text } from 'react-native';

class TextCom extends Component {
    render() {
        return (
            <Text>
                { this.props.text }
            </Text>
        )
    }
}

export default TextCom