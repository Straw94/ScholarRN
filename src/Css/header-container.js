import { StyleSheet } from 'react-native';
import common from './common.js'
import resolution from "../Function/scale";

const styles = StyleSheet.create({
    HeaderContainerOuter: {
        height: resolution.scale * 43,
    },
    HeaderTitleOuter: {
        height: resolution.scale * 43
    },
    ImageView: {
        height: resolution.scale * 30,
        width: resolution.scale * 30,
        borderRadius: resolution.scale * 30,
        marginLeft: resolution.scale * 10,
        overflow: 'hidden'
    },
    ...common
});

export default styles;