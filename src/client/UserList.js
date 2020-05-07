import React, { Component } from 'react';
import User from './User';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the users array
class UserList extends Component {
    constructor(props) {
        super(props);
        // store the users array in the state
        this.state = { users: [] };
    }

    componentDidMount() {
        // get the users API using axios GET request to the server 
        axios.get('api/users')
            .then(response => {
                //store the response in the state
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a User component for each user object
        const userList = this.state.users.map(u => (
            //map through each element in the array and set to the value received from the server
            <User
                key={u._id}
                id={u._id}
                email={u.email}
            />
        ));

        //return the list of users
        return (
            <div className="is-fluid">
            <h1 className="navbar-item title is-1 has-text-primary has-text-weight-bold">List of Users</h1>
                <hr />
                {/*USER LIST*/}
                <div>
                    <div className="columns is-multiline">
                        {userList}
                    </div>
                </div>
                {/*FOOTER*/}
                <footer className="footer has-background-primary">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Random User API</strong> styled with Bulma.</p>
                    </div>
                </footer>
            </div>

        );
    }
}

export default UserList;
