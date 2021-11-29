import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../components/styles/Styles';

class LoginScreen extends Component {

    constructor(props) {
        super (props);
        this.state = {
            Username: '',
            Password: ''
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{ height: 30 }}></View>
                <Image style={styles.splashscreenImage} source={require('../../assets/Icons/turboMovie.png')}></Image>
                <View style={{ height: 30 }}></View>
                <TextInput
                    style={styles.TextInputBackground}
                    value={this.state.Username}
                    keyboardType="default"
                    placeholder="User name"
                    onChangeText={(text) => this.setState({ Username: text })}>

                </TextInput>
                <TextInput
                    style={styles.TextInputBackground}
                    value={this.state.Password}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ Password: text })}>

                </TextInput>
                <View style={{ height: 30 }}></View>
                <TouchableOpacity onPress={() => this.props.navigation.replace('ListPageScreen')}>
                    <Text style={styles.ButtonStyle}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginScreen;