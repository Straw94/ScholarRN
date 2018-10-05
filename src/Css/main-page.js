import { StyleSheet } from 'react-native';
import common from './common.js'
const styles = StyleSheet.create({
    MainScreen: {
        flex: 0.9,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
    ...common
});

export default styles;