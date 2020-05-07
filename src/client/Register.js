import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/register', this.state)
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error registering in please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="container is-fluid">
                <h1 className="title has-text-weight-bold has-text-primary is-1">Register Below!</h1>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <input className="button is-primary" type="submit" value="Submit" />
            </form>
        );
    }
}
