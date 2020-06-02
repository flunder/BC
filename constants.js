import { View, UIManager, LayoutAnimation, Platform } from 'react-native'

/*
    Colors
    For extras colors use their name:
    http://chir.ag/projects/name-that-color
*/

export const Colors = {

    // Base --------------------

    primary: '#47B2FF',
    primaryDarker: '#019DF5',
    secondary: '#FEBAA5',

    success: 'green',
    error: 'red',
    warning: 'blue',

    // Grays --------------------

    gray100: '#F7FAFC', // bright
    gray200: '#EDF2F7',
    gray300: '#E2E8F0',
    gray400: '#CBD5E0;',
    gray500: '#A0AEC0;',
    gray600: '#718096;',
    gray700: '#4A5568',
    gray800: '#2D3748',
    gray900: '#1A202C', // dark

    // Misc --------------------

    // Blues

    facebookBlue: '#3678EA',

    // Greens

    pastelGreen: '#7FE87C',
}

export const Grid = {
    gutterWidth: 30
}

export const Borders = {
    medium: 5,
    large: 20
}

/*
    LayoutAnimation Configs
*/

export const LayoutAnimationConfig = {
    duration: 150,
    create: { type: 'linear', property: 'opacity' },
    update: { type: LayoutAnimation.Types.spring, springDamping: 0.7 },
    delete: { type: 'linear', property: 'opacity' }
};

export const CustomLayoutSpring = {
    duration: 400,
    create: { type: LayoutAnimation.Types.spring, property: LayoutAnimation.Properties.scaleXY, springDamping: 0.7 },
    update: { type: LayoutAnimation.Types.spring, springDamping: 0.7 },
    delete: { type: LayoutAnimation.Types.spring, property: LayoutAnimation.Properties.scaleXY, springDamping: 0.7 }
};

/* Async Storage */

export const LikesKey = "LIKES"

/* Languages
   https://www.loc.gov/standards/iso639-2/php/code_list.php
*/

export const Languages = {
    en: 'en',
    it: 'it'
}
