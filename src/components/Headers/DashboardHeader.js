import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/Styles'

function DashboardHeader ({ props }) {
    return(
        <View>
            <View style={styles.HeaderStyle}>
                <Text style={styles.HeaderText}>Movie Turbo</Text>
            </View>
            <View style={styles.HeaderSeperator}></View>
        </View>
        
    )
}

export { DashboardHeader };