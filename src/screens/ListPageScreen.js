import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as MovieAction from '../redux/Actions/MovieAction';
import { View, Image, FlatList, Text } from 'react-native';
import { styles } from '../components/styles/Styles';
import StarRating from 'react-native-star-rating';
import { DashboardHeader } from '../components/Headers/DashboardHeader'

class ListPageScreen extends Component {

    componentDidMount () {
        this.props.dispatch(MovieAction.fetMoviews());
    }

    renderMovies = ({item}) => {
        return (
            // API response is not having image data that's why Hardcoded the link of Image.
            <View style={styles.MoviesContainer}>
                <Image style={styles.MovieImage} source={{ uri: 'https://m.media-amazon.com/images/I/61RhWaYBp7L._AC_SY679_.jpg' }}></Image>
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={styles.MovieTitleText}>{item.title}</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4}
                        containerStyle={styles.MovieStarStyle}
                        starSize={17}
                        emptyStar={require('../../assets/Icons/starempty.png')}
                        fullStar={require('../../assets/Icons/starfull.png')}
                    />
                    <Text style={styles.MovieReleaseYearText}>Release Year: {item.releaseYear}</Text>
                </View>
            </View>
        )
    }

    render() {
        console.log(this.props.movies.movies);
        return(
            <View style={styles.containerSplash}>
                <DashboardHeader props={this.props}/>
                <FlatList
                    data={this.props.movies.movies}
                    renderItem={this.renderMovies}
                    showsVerticalScrollIndicator={false}
                    >

                </FlatList>
            </View>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        movies: state.Movie
    }
}

export default connect(mapStateToProps)(ListPageScreen);