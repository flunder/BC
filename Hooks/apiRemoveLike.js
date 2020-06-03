import React from 'react'
import axios from 'axios'

const apiRemoveLike = async ({ name, language, gender, ...props }) => {

    return await axios
        .post(`http://localhost:3000/name/${name}`, {
            type: 'dislike',
            gender: gender,
            language: language
        })
        .then(res => res.data)
        .catch((e) => { console.log(e); });
}

export { apiRemoveLike }
