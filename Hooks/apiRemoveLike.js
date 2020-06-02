import React from 'react'
import axios from 'axios'

const apiRemoveLike = async ({ name, language, gender, ...props }) => {

    console.log('removing like', name);

    return await axios.post(`http://localhost:3000/name/${name}`, {
        type: 'dislike',
        gender: 'gender',
        language: 'language'
    }).then(res => res.data)
}

export { apiRemoveLike }
