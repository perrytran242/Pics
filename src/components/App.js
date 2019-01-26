import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

const marginTop = {
    marginTop: '10px',
}

class App extends Component {
    state = {
        images: [],
    }

    // componentDidUpdate() {
    //     console.log("UPDATED");
    //     this.sendImages()
    // }

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        });
        
        this.setState({
            images: response.data.results
        })
        
        // fetch(`${BASE_URL}/search/photos/?client_id=${API_KEY}&query=${ searchTerm }`,)
        //     .then( response => response.json())
        //     .catch( error => console.log('ERROR:', error))
        //     .then( data => {
        //         // console.log(data.results[0].urls.regular);
        //         this.setState({ images: data.results })
        //     });
    }

    sendImages() {
        const { images } = this.state;
        
        images.map( (image) => {
            // console.log("IMAGE:", image);
            return this.state.images ? <ImageList imageURL = { image.urls.small }/> : null;
        });
    }

    render() {
        return (
            <div className="ui container" style={ marginTop }>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                Found: { this.state.images.length } images.
            </div>
        );
    }
}

export default App;