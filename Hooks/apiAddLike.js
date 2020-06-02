import React from 'react'
import axios from 'axios'

const apiAddLike = async ({ name, language, gender, ...props }) => {

    console.log('adding like', name);

    return await axios.post(`http://localhost:3000/name/${name}`, {
        type: 'like',
        gender: gender,
        language: language
    }).then(res => res.data)

}

export { apiAddLike }
