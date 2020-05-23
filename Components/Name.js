import React, { useState, useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import { getRandomInt } from '../helpers'

const fontStyles = {
    fontFamily: 'System', fontWeight: '700', fontSize: 58, color: 'white'
}

const animations = ['drop', 'reveal'];

function Name({ name, ...props }) {

    const [splitName, setSplitName] = useState([]);
    const letterAni = useRef({
        offsetY: [...Array(20)].map(_ => new Animated.Value(0)),
        opacity: [...Array(20)].map(_ => new Animated.Value(0)),
        rotateY: [...Array(20)].map(_ => new Animated.Value(0))
    }).current;

    const containerOffsetY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (name) getSplitName();
    }, [name]);

    useEffect(() => {
        if (splitName.length > 0) runAnimation();
    }, [splitName]);

    getSplitName = () => {
        setSplitName(name.split(''))
    }

    runAnimation = () => {
        resetAnimatedValues();

        const aniType = getRandomInt(0, animations.length);

        if (aniType === 0) dropAnimation();
        if (aniType === 1) spinAnimation();

    }

    resetAnimatedValues = () => {
        splitName.map((letter, i) => {
            letterAni.offsetY[i].setValue(0);
            letterAni.opacity[i].setValue(0);
            letterAni.rotateY[i].setValue(0);
        })
    }

    dropAnimation = () => {
        containerOffsetY.setValue(-5);

        Animated.stagger(35, [
            ...splitName.map((letter, i) => (
                Animated.parallel([
                    Animated.spring(letterAni.offsetY[i], { toValue: 5, friction: 3.5, useNativeDriver: true }),
                    Animated.timing(letterAni.opacity[i], { duration: 0, toValue: 1, useNativeDriver: true })
                ])
            ))
        ]).start();
    }

    spinAnimation = () => {
        containerOffsetY.setValue(0);

        Animated.stagger(50, [
            ...splitName.map((letter, i) => (
                letterAni.rotateY[i].setValue(50),
                Animated.parallel([
                    Animated.timing(letterAni.opacity[i], { duration: 0, toValue: 1, useNativeDriver: true }),
                    Animated.spring(letterAni.rotateY[i], { duration: 200, toValue: 0, useNativeDriver: true }),
                ])
            ))
        ]).start();
    }

    return (
        <Animated.View style={{ flexDirection: 'row', transform: [{ translateY: containerOffsetY }] }}>
            {splitName.map((letter, i) => (
                <Animated.Text key={i} style={{ ...fontStyles, opacity: letterAni.opacity[i], transform: [{ translateY: letterAni.offsetY[i] }, { rotateY: letterAni.rotateY[i].interpolate({ inputRange: [0, 360], outputRange: ["0deg", "360deg"]}) }]}}>
                    {letter}
                </Animated.Text>
            ))}
        </Animated.View>
    )
}

export { Name }
