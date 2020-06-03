import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

function TrendingMessages({ likes, ...props }) {

    // const [page, setPage] = useState(0);

    // useEffect(() => {
    // }, []);

    console.log(likes.map(n => n.name));

    if (likes.length <= 0) return null;

    return (
        <View>
            <Text>{likes[0].name}</Text>
        </View>
    )
}

export { TrendingMessages }
