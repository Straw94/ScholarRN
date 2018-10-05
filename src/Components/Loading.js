import React, { Component } from 'react';
import {
    View,
    ProgressBarAndroid,
    Modal,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    loadingBox: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    }
})


export default class Loading extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        return(
            <Modal
                transparent = {true}
                onRequestClose={()=> this.onRequestClose()}
            >
                <View style={styles.loadingBox}>
                    <Text style={{color: 'white'}}>Loading...</Text>
                    <ProgressBarAndroid styleAttr='Inverse' color='rgba(255, 255, 255, 1)' />
                </View>
            </Modal>
        );
    }

}
