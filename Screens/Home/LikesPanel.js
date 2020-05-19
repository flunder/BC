import React, { useState, useEffect, useRef } from 'react'
import { Animated, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Borders, Colors, Grid } from '../../constants'
import { CloseButton } from '../../Components/Icons'

const panelHeight = 300;

function LikesPanel({ isShowing, hideLikes, likes, unlike, props }) {

    // const [page, setPage] = useState(0);
    const backgroundOpacity = useRef(new Animated.Value(0));
    const panelOffsetY = useRef(new Animated.Value(panelHeight));

    useEffect(() => {
        if (isShowing === true) showLikePanel()
    }, [isShowing]);

    triggerHide = () => {
        Animated.parallel([
            Animated.spring(backgroundOpacity.current, { toValue: 0, tension: 85, useNativeDriver: true }),
            Animated.spring(panelOffsetY.current, { toValue: panelHeight, tension: 85, useNativeDriver: true })
        ]).start();

        setTimeout(hideLikes, 300);
    }

    showLikePanel = () => {
        backgroundOpacity.current.setValue(0);
        panelOffsetY.current.setValue(panelHeight);
        Animated.parallel([
            Animated.spring(backgroundOpacity.current, { toValue: 0.4, tension: 85, useNativeDriver: true }),
            Animated.spring(panelOffsetY.current, { toValue: 0, tension: 85, useNativeDriver: true })
        ]).start();
    }

    if (!isShowing) return null;

    return (
        <View style={{ ...StyleSheet.absoluteFillObject }}>
            <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={triggerHide}>
                <Animated.View  style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: backgroundOpacity.current }}/>
            </TouchableOpacity>

            <Animated.View style={{ paddingTop: 25, flexDirection: 'column', position: 'absolute', bottom: -50, width: '100%', borderTopLeftRadius: Borders.large, borderTopRightRadius: Borders.large, backgroundColor: 'white', height: panelHeight + 50, alignItems: 'center', transform: [{ translateY: panelOffsetY.current }] }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ fontFamily: 'System', fontSize: 18, fontWeight: '700', color: 'black', textAlign: 'center' }}>Likes</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={triggerHide} style={{ top: 2, position: 'absolute', right: Grid.gutterWidth }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <CloseButton />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ width: '100%', marginTop: 15, marginBottom: 50 }}>
                    {likes && likes.sort().map(name => {
                        return (
                            <View key={name} style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E0E0E0', paddingHorizontal: Grid.gutterWidth, paddingVertical: 10 }}>
                                <Text style={{ fontFamily: "System", fontSize: 16, letterSpacing: 0.25 }}>{name}</Text>
                                <TouchableOpacity style={{ opacity: 0.3 }} onPress={() => { unlike(name) }}>
                                    <CloseButton />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </Animated.View>
        </View>
    )
}

export { LikesPanel }
