import React from 'react'
import { Home } from './Screens/Home'
import { StatusBar } from 'react-native'

export default class App extends React.Component {
    componentDidMount() {
        StatusBar.setHidden(true)
    }

    render() {
        return <Home />;
    }
}
