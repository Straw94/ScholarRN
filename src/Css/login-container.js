import { StyleSheet } from 'react-native';
import common from './common.js'
import resolution from '../Function/scale.js'
const styles = StyleSheet.create({
    LoginContainerOuter: {
        padding: resolution.scale * 22,
        flex: 1,
    },
    Close: {
        alignItems: 'flex-end',
    },
    Company: {
        marginTop: resolution.scale * 25,
    },
    TextInputCenter: {
        alignItems:'center',
        width: resolution.width - resolution.scale * 44,
    },
    TextInputOuter: {
        flexDirection: 'row',
        width: resolution.scale * 300,
        height: resolution.scale * 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    TextInputIcon: {
        paddingLeft: resolution.scale * 24,
        paddingRight: resolution.scale * 12,
    },
    Username: {
        marginTop: resolution.scale * 45,
    },
    Password: {
        marginTop: resolution.scale * 25,
    },
    TextInput: {
        color: 'white',
        borderLeftWidth: 1,
        width: resolution.scale * 200,
        borderLeftColor: 'rgba(255, 255, 255, 0.2)',
        paddingLeft: resolution.scale * 15,
        height: resolution.scale * 20,
    },
    Submit: {
        width: resolution.scale * 300,
        height: resolution.scale * 40,
        marginTop: resolution.scale * 50
    },
    RegisteWord: {
        marginTop: 18,
        color:'white'
    },
    BottomWord: {
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    BottomWords: {
        width: 82
    },
    BottomLeftWord: {
        marginRight: resolution.scale * 32
    },
    BottomRightWord: {
        marginLeft: resolution.scale * 32
    },
    BottomWordOuter: {
        flexDirection: 'row',
        marginTop: resolution.scale * 101
    },
    ...common
});

export default styles;