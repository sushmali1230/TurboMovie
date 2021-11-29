import { Dimensions, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerSplash: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        height: Dimensions.get('window').height
    },
    WelcomeText: {
        fontWeight: '700', 
        fontSize: 24, 
        color: 'black', 
        marginVertical: 130
    },
    ButtonStyle: {
        backgroundColor: '#3f89e4', 
        marginTop: 20, 
        borderRadius: 25, 
        height: 45, 
        color: 'white', 
        fontSize: 15, 
        width: Dimensions.get('window').width-180, 
        textAlign: 'center', 
        paddingTop: 11
    },
    splashscreenImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    TextInputBackground: { 
        marginHorizontal: 20, 
        borderRadius: 40, 
        marginVertical: 12,
        width: Dimensions.get('window').width-130,
        borderColor: 'black', 
        borderWidth: 0.5,
        paddingLeft: 17 
    },
    MoviesContainer: {
        height: 150, 
        width: Dimensions.get('window').width-50, 
        marginLeft: 15, 
        marginVertical: 12, 
        borderRadius: 5, 
        flexDirection: 'row', 
        borderWidth: 0.5
    },
    MovieImage: {
        width: 100, 
        height: 150
    },
    MovieTitleText: {
        color: 'black', 
        fontSize: 17, 
        fontWeight: '700', 
        marginVertical: 5
    },
    MovieReleaseYearText: {
        color: '#3f89e4', 
        fontSize: 14, 
        fontWeight: '700', 
        marginVertical: 5
    },
    MovieStarStyle: {
        width: 100, 
        marginVertical: 10
    },
    HeaderText: {
        textAlignVertical: 'center', 
        fontSize: 18, 
        color: '#3f89e4', 
        textAlign: 'center',
        marginTop: 10
    },
    HeaderStyle: {
        backgroundColor: '#white', 
        height: 50
    },
    HeaderSeperator: {
        height: 0.7,
        width: Dimensions.get('window').width, 
        backgroundColor: "black"
    }
});

export { styles };