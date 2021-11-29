import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../components/styles/Styles';

class WelcomeScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.splashscreenImage} source={require('../../assets/Icons/turboMovie.png')}></Image>
                <Text style={styles.WelcomeText}>WELCOME</Text>
                <TouchableOpacity onPress={() => this.props.navigation.replace('LoginScreen')}>
                    <Text style={styles.ButtonStyle}>GETTING START</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default WelcomeScreen;