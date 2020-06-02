import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function useApiNames(props) {

    const [names, setNames] = useState([]);
    const interval = useRef()

    useEffect(() => {
        triggerLoadApiNames();
        // updatePeriodically();
        return () => clearInterval(interval.current);
    }, [])

    triggerLoadApiNames = async () => {
        const names = await loadApiNames();
        setNames(names);
    }

    updatePeriodically = async () => {
        interval.current = setInterval(triggerLoadApiNames, 5000);
    }

    loadApiNames = async () => {
        return axios.get('http://localhost:3000/names').then(res => res.data)
    }

    return names;
}

export { useApiNames }
