import React, { useEffect, useState, useRef } from 'react'
import { Animated, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Colors, Grid, Borders, LikesKey, Languages } from '../constants'
import { Cog, List, BabyMale, BabyFemale } from '../Components/Icons'
import { Like, Name } from '../Components'
import { NamesMale, NamesFemale } from '../names'
import { getRandomInt } from '../helpers'
import { SettingsPanel } from './Home/SettingsPanel'
import { LikesPanel } from './Home/LikesPanel'
import { isIphoneX } from '../helpers'
import { useApiNames } from '../Hooks/useApiNames'
import { apiAddLike } from '../Hooks/apiAddLike'
import { apiRemoveLike } from '../Hooks/apiRemoveLike'

const colors = {
    male: 1,
    female: 0,
}

const defaultLanguage = Object.keys(Languages)[0];

const initialGender = 'female';

function Home() {

    const [currentName, setCurrentName] = useState(false);
    const [gender, setGender] = useState(initialGender);
    const [showingSettings, setShowSettings] = useState(false);
    const [showingLikes, setShowLikes] = useState(false);
    const [likes, setLikes] = useState(false);
    const names = useRef({ male: NamesMale, female: NamesFemale });
    const backgroundColor = useRef(new Animated.Value(colors[initialGender]));
    const apiLikes = useApiNames();
    const [language, setLanguage] = useState(defaultLanguage)

    const backgroundColorInterpolated = useRef(
        backgroundColor.current.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.primary, Colors.secondary]
        })
    )

    useEffect(() => {
        triggerLoadLikes();
        // triggerClearAsync(); // Debug
    }, [])

    useEffect(() => {
        getRandomName();
        changeBackgroundColor();
    }, [gender])

    useEffect(() => {
        if (likes) saveLikes();
    }, [likes])

    getRandomName = () => {
        const total = names.current[gender].length;
        const randomIndex = getRandomInt(0, total)

        setCurrentName(names.current[gender][randomIndex])
    }

    showSettings = () => { setShowSettings(true) };
    hideSettings = () => { setShowSettings(false) };
    showLikes = () => { setShowLikes(true) };
    hideLikes = () => { setShowLikes(false) };

    triggerSetGender = (gender) => {
        setGender(gender)
    }

    changeBackgroundColor = () => {
        Animated.spring(backgroundColor.current, { toValue: colors[gender], useNativeDriver: false }).start();
    }

    triggerClearAsync = async () => {
        await clearAsync();
    }

    clearAsync = async () => {
        try {
            await AsyncStorage.removeItem(LikesKey);
            setLikes(false);
            return true;
        } catch (exception) {
            return false;
        }
    }

    triggerLoadLikes = async () => {
        const likes = await loadLikes();
        if (likes) setLikes(likes);
    }

    loadLikes = async () => {
        try {
            const seen = await AsyncStorage.getItem(LikesKey);
            return JSON.parse(seen);
        } catch (err) {
            console.warn(err)
        }
    }

    saveLikes = async () => {
        try {
            // console.log(likes);
            const jsonOfItem = await AsyncStorage.setItem(LikesKey, JSON.stringify(likes));
            return jsonOfItem;

        } catch (error) {
            console.log(error.message);
        }
    }

    handleLike = async () => {
        if (likes && likes.indexOf(currentName) !== -1) {
            removeLike();
        } else {
            addLike();
        }
    }

    addLike = async () => {
        const collection = likes ? [...likes, currentName] : [currentName];
        setLikes(collection);
        await apiAddLike({ name: currentName, language, gender });
    }

    removeLike = async () => {
        const collection = likes.filter(n => n !== currentName);
        setLikes(collection);
        await apiRemoveLike({ name: currentName, language, gender });
    }

    unlike = async (name) => {
        const collection = likes.filter(n => n !== name);
        setLikes(collection);
        await apiRemoveLike({ name: name, language, gender });
    }

    // console.log(apiLikes);

    return (
        <View style={{ flex: 1 }}>

            <Animated.View style={{ flex: 1, backgroundColor: backgroundColorInterpolated.current, padding: Grid.gutterWidth }}>

                <View>
                    <TouchableOpacity onPress={showSettings} activeOpacity={0.8} style={{ alignSelf: 'flex-end'}} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                        <Cog />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', top: -50, zIndex: -1  }}>

                    <View style={{ marginBottom: 10 }}>
                        {gender === "male" && <BabyMale />}
                        {gender === "female" && <BabyFemale />}
                    </View>

                    <Name
                        name={currentName}
                    />
                </View>

                <View style={{ height: 55, flexDirection: 'row', justifyContent: 'space-between', marginBottom: isIphoneX() ? 10 : 0  }}>
                    <TouchableOpacity onPress={handleLike} activeOpacity={0.9} style={{ marginRight: 15 }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Like
                            liked={likes && likes.indexOf(currentName) !== -1}
                            gender={gender}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={getRandomName} style={{ flex: 1, backgroundColor: 'white', borderRadius: Borders.medium, paddingVertical: 12, alignItems: 'center' }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Text style={{ fontFamily: "System", fontSize: 18, color: Colors.primary, lineHeight: 30 }}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showLikes} activeOpacity={0.9} style={{ width: 55, height: 55, backgroundColor: 'white', borderRadius: 100, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <List />
                    </TouchableOpacity>
                </View>

            </Animated.View>

            <SettingsPanel
                isShowing={showingSettings}
                hideSettings={hideSettings}
                setGender={triggerSetGender}
                gender={gender}
            />

            <LikesPanel
                isShowing={showingLikes}
                hideLikes={hideLikes}
                likes={likes}
                unlike={unlike}
            />

        </View>
    );

}


export { Home }
