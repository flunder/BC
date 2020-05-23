import React, { useState, useEffect, useRef } from 'react'
import { Animated, Dimensions, Linking, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Borders, Colors, Grid } from '../../constants'
import { CloseButton } from '../../Components/Icons'
import { isIphoneX } from '../../helpers'

const { width } = Dimensions.get('window');

const sliderPositions = {
    male: 0,
    female: (width - (Grid.gutterWidth * 2)) / 2,
}

function ToggleButton({ setGender, gender }) {

    const selectedPosition = useRef(new Animated.Value(sliderPositions[gender]));
    const backgroundColor = useRef(new Animated.Value(gender === "male" ? 1 : 0))
    const backgroundColorInterpolated = useRef(
        backgroundColor.current.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.primary, Colors.secondary]
        })
    )

    useEffect(() => {
        Animated.parallel([
            Animated.spring(selectedPosition.current, { toValue: sliderPositions[gender], tension: 80, friction: 9, useNativeDriver: false }),
            Animated.spring(backgroundColor.current, { toValue: gender === "male" ? 1 : 0, tension: 40, useNativeDriver: false })
        ]).start();
    }, [gender])

    return (
        <View style={{ marginTop: 15, backgroundColor: '#f3f3f3', width: '100%', height: 48, borderRadius: Borders.medium, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
            <TouchableOpacity onPress={() => { setGender('male') }} activeOpacity={1} style={{ alignItems: 'center', flex: 1, height: '100%', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'System', fontWeight: '600', fontSize: 14, color: 'white', color: gender === "male" ? 'white' : Colors.black }}>♂Boy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setGender('female') }} activeOpacity={1} style={{ alignItems: 'center', flex: 1, height: '100%', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'System', fontWeight: '600', fontSize: 14, color: Colors.black, color: gender === "female" ? 'white' : Colors.black, }}>Girl♀</Text>
            </TouchableOpacity>
            <Animated.View style={{ borderRadius: Borders.medium, zIndex: -1, position: 'absolute', width: (width - (Grid.gutterWidth * 2)) / 2, height: '100%', backgroundColor: backgroundColorInterpolated.current, transform: [{ translateX: selectedPosition.current }] }} />
        </View>
    )
}

const panelHeight = isIphoneX() ? 185 : 165;

function SettingsPanel({ isShowing, hideSettings, setGender, gender, props }) {

    // const [page, setPage] = useState(0);
    const backgroundOpacity = useRef(new Animated.Value(0));
    const panelOffsetY = useRef(new Animated.Value(panelHeight));

    useEffect(() => {
        if (isShowing) showSettingsPanel()
    }, [isShowing]);

    triggerHide = () => {
        Animated.parallel([
            Animated.spring(backgroundOpacity.current, { toValue: 0, tension: 85, useNativeDriver: true }),
            Animated.spring(panelOffsetY.current, { toValue: panelHeight, tension: 85, useNativeDriver: true })
        ]).start();

        setTimeout(hideSettings, 300);
    }

    showSettingsPanel = () => {
        backgroundOpacity.current.setValue(0);
        panelOffsetY.current.setValue(panelHeight);
        Animated.parallel([
            Animated.spring(backgroundOpacity.current, { toValue: 0.4, tension: 85, useNativeDriver: true }),
            Animated.spring(panelOffsetY.current, { toValue: 0, tension: 85, useNativeDriver: true })
        ]).start();
    }

    openTerms = async () => {
        await Linking.openURL('http://larsattacks.co.uk/?page_id=115');
    }

    if (!isShowing) return null;

    return (
        <View style={{ ...StyleSheet.absoluteFillObject }}>
            <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={triggerHide}>
                <Animated.View  style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: backgroundOpacity.current }}/>
            </TouchableOpacity>

            <Animated.View style={{ paddingTop: 25, flexDirection: 'column', paddingHorizontal: Grid.gutterWidth, position: 'absolute', bottom: -25, width: '100%', borderTopLeftRadius: Borders.large, borderTopRightRadius: Borders.large, backgroundColor: 'white', height: panelHeight + 25, alignItems: 'center', transform: [{ translateY: panelOffsetY.current }] }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ fontFamily: 'System', fontSize: 18, fontWeight: '700', color: 'black', textAlign: 'center' }}>Settings</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={triggerHide} style={{ position: 'absolute', right: 0 }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <CloseButton />
                    </TouchableOpacity>
                </View>

                <ToggleButton
                    setGender={setGender}
                    gender={gender}
                />

                <View style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: "System", fontSize: 11, color: Colors.black }}>Ⓒ 2020 RunTings</Text>

                    <TouchableOpacity onPress={openTerms} activeOpacity={0.8}>
                        <Text style={{ fontFamily: "System", fontSize: 11, color: Colors.black }}>
                            Terms & Conditions
                        </Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
        </View>
    )
}

export { SettingsPanel }
