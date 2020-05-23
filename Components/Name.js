import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

function Name({ name, ...props }) {

    // const [page, setPage] = useState(0);

    // useEffect(() => {
    // }, []);

    return (
        <Text style={{ fontFamily: 'System', fontWeight: '700', fontSize: 58, color: 'white' }}>
            {name}
        </Text>
    )
}

export { Name }
