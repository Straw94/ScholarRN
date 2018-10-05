import React, { Component } from 'react';
import { PixelRatio, Dimensions} from 'react-native';

import { Provider } from 'react-redux';
import Screen from './src/Screen/index';
import configureStore from './src/Redux/index';

const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
let pxRatio = PixelRatio.get();
let {win_width,win_height} = Dimensions.get("window");

let scale = 1/pxRatio;
let width = pt2px(win_width);
let height = pt2px(win_height);
const styles= {
    container: {
        width: width,
        height: height,
        backgroundColor: 'transparent',
        transform: [{translateX: -width * .5},
            {translateY: -height * .5},
            {scale: scale},
            {translateX: width * .5},
            {translateY: height * .5}]
    },
}

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Screen sytle={styles.container}></Screen>
            </Provider>
        )
    }
}

export default App










