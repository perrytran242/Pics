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

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        });

        this.setState({
            images: response.data.results,
        });
        
        // fetch(`${BASE_URL}/search/photos/?client_id=${API_KEY}&query=${ searchTerm }`,)
        //     .then( response => response.json())
        //     .catch( error => console.log('ERROR:', error))
        //     .then( data => {
        //         // console.log(data.results[0].urls.regular);
        //         this.setState({ images: data.results })
        //     });
    }

    render() {
        return (
            <div className="ui container" style={ marginTop } >
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList altTag={this.state.term} images={this.state.images} />
            </div>
        );
    }
}

export default App;