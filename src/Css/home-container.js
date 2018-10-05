import { StyleSheet } from 'react-native';
import common from './common.js'
import resolution from '../Function/scale.js'
const styles = StyleSheet.create({
    HomeContainerOuter: {
        marginTop: resolution.scale * 64,
        zIndex: -1,
        flex: 1,
    },
    HomeContainerItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: resolution.scale * 10,
    },
    HomeContainerBox: {
        width: resolution.scale * 150,
        height: resolution.scale * 200,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    HomeContainerRight: {
        marginRight: resolution.scale * 32,
    },
    HomeContainerLeft: {
        marginLeft: resolution.scale * 32,
    },
    HomeContainerFooter: {
        width: resolution.scale * 310,
        height: resolution.scale * 70,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: resolution.scale * 10,
    },
    ImageItemOuter: {
        width: resolution.scale * 90,
        height: resolution.scale * 90,
        borderRadius: resolution.scale * 90,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    ...common
});

export default styles;