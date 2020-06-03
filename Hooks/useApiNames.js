import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function useApiNames({ gender, language }) {

    const [names, setNames] = useState([]);
    const interval = useRef();

    useEffect(() => {
        triggerLoadApiNames();
        updatePeriodically();
        return () => clearInterval(interval.current);
    }, [gender, language])

    triggerLoadApiNames = async () => {
        const names = await loadApiNames();
        setNames(names);
    }

    updatePeriodically = async () => {
        if (interval.current) clearInterval(interval.current);
        interval.current = setInterval(triggerLoadApiNames, 5000);
    }

    loadApiNames = async () => {
        return axios
            .post('http://localhost:3000/topnames', { gender: gender, language: language })
            .then(res => res.data)
            .catch((e) => { console.log(e); });
    }

    return names;
}

export { useApiNames }
