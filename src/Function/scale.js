import {Dimensions,PixelRatio} from 'react-native';
let designSize = {width:375,height:667};

export default (function () {
        let pxRatio = PixelRatio.get();
        let {width, height} = Dimensions.get("window");
        let w = PixelRatio.getPixelSizeForLayoutSize(width);
        let h = PixelRatio.getPixelSizeForLayoutSize(height);

        let scale = designSize.width / w;
        let winSize = {width: designSize.width, height: h * scale};

        return {
            width: winSize.width,
            height: winSize.height,
            scale: (1 / scale) / pxRatio
        }
})()