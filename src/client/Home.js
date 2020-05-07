import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Loading...'
        };
    }

    componentDidMount() {
        axios.get('/api/home')
            .then(response => this.setState({ message: response.data }));
    }

    render() {
        return (
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                <div className="hero-body container">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <h1 className="title has-text-weight-bold has-text-primary is-1">{this.state.message}</h1>
                            <h2 className="subtitle">Hero subtitle</h2>
                        </div>
                        <div className="column">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/User-welcome.png" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
