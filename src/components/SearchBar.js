import React, { Component } from 'react';

class SearchBar extends Component {
    // different ways to bind "this"
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    state = {
        term: '',
    }
    // onInputChange(e) {
    //     console.log(e.target.value);
    // }
    // onFormSubmit: function() same thing as code on the bottom.
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({
            term: '',
        })
    }

    render() {
        return (
            <div className="ui segment ">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            // short form version of doing an event handler in one line
                            // controlled element
                            onChange={ (e) => this.setState({term: e.target.value}) } 
                            value = { this.state.term }
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;