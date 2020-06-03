import React, { useState, useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

function TrendingMessages({ likes, ...props }) {

    const [topName, setTopName] = useState(false);
    const barHeight = useRef(new Animated.Value(0)).current;
    const barOpacity = useRef(new Animated.Value(0)).current;
    const headlineOpacity = useRef(new Animated.Value(0)).current;
    const headlineOffsetY = useRef(new Animated.Value(0)).current;
    const nameOpacity = useRef(new Animated.Value(0)).current;
    const nameOffsetY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (likes.length > 0) {
            setTopName(likes[0].name)
        }
    }, [likes]);

    useEffect(() => {
        showTopName();
        setTimeout(hideTopName, 2000)
    }, [topName])

    showTopName = () => {
        barHeight.setValue(0);
        barOpacity.setValue(0);
        headlineOpacity.setValue(0);
        headlineOffsetY.setValue(-10);
        nameOpacity.setValue(0);
        nameOffsetY.setValue(-10);

        Animated.stagger(100, [
            Animated.parallel([
                Animated.spring(barHeight, { toValue: 50, friction: 6, useNativeDriver: true }),
                Animated.spring(barOpacity, { toValue: 1, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.spring(headlineOpacity, { toValue: 1, useNativeDriver: true }),
                Animated.spring(headlineOffsetY, { toValue: 0, friction: 6, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.spring(nameOpacity, { toValue: 1, useNativeDriver: true }),
                Animated.spring(nameOffsetY, { toValue: 0, friction: 6, useNativeDriver: true }),
            ])
        ]).start();
    }

    hideTopName = () => {
        Animated.stagger(100, [
            Animated.parallel([
                Animated.spring(barHeight, { toValue: 0, friction: 6, useNativeDriver: true }),
                Animated.spring(barOpacity, { toValue: 0, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.spring(headlineOpacity, { toValue: 0, useNativeDriver: true }),
                Animated.spring(headlineOffsetY, { toValue: -10, friction: 6, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.spring(nameOpacity, { toValue: 0, useNativeDriver: true }),
                Animated.spring(nameOffsetY, { toValue: -10, friction: 6, useNativeDriver: true }),
            ])
        ]).start();
    }

    if (!topName) return null;

    return (
        <View style={{ flexDirection: 'row' }}>
            <Animated.View style={{ width: 17, opacity: barOpacity, backgroundColor: 'white', borderRadius: 4, marginRight: 10, transform: [{ translateY: headlineOffsetY }] }} />
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Animated.Text style={{ color: 'white', fontSize: 18, fontWeight: '800', transform: [{ translateY: headlineOffsetY }], opacity: headlineOpacity }}>Currently trending</Animated.Text>
                <Animated.Text style={{ color: 'white', fontSize: 18, fontWeight: '500', transform: [{ translateY: nameOffsetY }], opacity: nameOpacity }}>{topName}</Animated.Text>
            </View>
        </View>
    )
}

export { TrendingMessages }
