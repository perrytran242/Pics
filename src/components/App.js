import React, { Component } from 'react';
import axios from 'axios';


import SearchBar from './SearchBar';

const marginTop = {
    marginTop: '10px',
}

const API_KEY = '614a64c32440450b250c3873584e28674c754a6c975a3f59e71d0679724833cb';
const BASE_URL = `https://api.unsplash.com/`;

class App extends Component {
    state = {
        term: '',
    }

    onSearchSubmit = (searchTerm) => {
        console.log(searchTerm)

        axios.get(`${BASE_URL}/search/photos/?client_id=${API_KEY}`, {
            params: { query: searchTerm }
        }).then( (resp) => {
            console.log(resp);
        }).catch( (err) => {
            console.log(err);
        })

    }

    render() {
        console.log('TERM:', this.state.term);
        return (
            <div className="ui container" style={ marginTop }>
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        );
    }
}

export default App;