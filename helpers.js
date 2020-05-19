import { Dimensions } from 'react-native'

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// https://medium.com/plark/react-native-how-to-determine-iphone-x-or-xr-fa2d15ad1617

export function isIphoneX() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

export function isIPhoneXSize(dim) {
    return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
    return dim.height == 896 || dim.width == 896;
}
