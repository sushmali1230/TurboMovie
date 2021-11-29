import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from '../components/styles/Styles';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {this.props.navigation.replace("WelcomeScreen")}, 2000) 
    }

    render() {
        return(
            <View style={styles.containerSplash}>
                <View style={{ flex: 1 }}></View>
                <Image style={styles.splashscreenImage} source={require('../../assets/Icons/turboMovie.png')}></Image>
                <View style={{ flex: 1 }}></View>
            </View>
        )
    }
}

export default SplashScreen;