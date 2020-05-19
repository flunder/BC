import React, { useRef, useState, useEffect } from 'react'
import { Animated, Text, View } from 'react-native'
import { Heart } from './Icons'
import { Colors } from '../constants'

const ToggleColors = {
    'male': {
        liked: Colors.primary,
        unLiked: Colors.secondary
    },
    'female': {
        liked: Colors.secondary,
        unLiked: Colors.primary
    },
}

function Like({ liked, gender }) {

    const previousLikedValue = useRef(null);
    const heartScale = useRef(new Animated.Value(1));
    const heartScaleBounce = useRef(
        heartScale.current.interpolate({
            inputRange: [1, 1.5, 2],
            outputRange: [1, 1.3, 1]
        })
    )
    const surroundBounce = useRef(
        heartScale.current.interpolate({
            inputRange: [1, 1.5, 2],
            outputRange: [1, 1.1, 1]
        })
    )

    useEffect(() => {
        // Only bounce when liking, not when disliking
        if ((liked !== previousLikedValue.current) && liked === true) {
            bounce()
        }

        previousLikedValue.current = liked;
    }, [liked]);

    const bounce = () => {
        heartScale.current.setValue(1)
        Animated.spring(heartScale.current, { toValue: 2, friction: 5, useNativeDriver: true }).start();
    }

    return (
        <Animated.View style={{ width: 55, height: 55, backgroundColor: 'white', borderRadius: 100, alignItems: 'center', justifyContent: 'center', transform: [{ scale: surroundBounce.current }]}}>
            <Animated.View style={{ transform: [{ scale: heartScaleBounce.current }]}}>
                {
                    liked
                        ? <Heart fill={ToggleColors[gender].liked} stroke={ToggleColors[gender].liked} />
                        : <Heart fill={ToggleColors[gender].unLiked} stroke={ToggleColors[gender].unLiked} />
                }
            </Animated.View>
        </Animated.View>
    )


}

export { Like }
