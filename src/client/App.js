import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = { loggedIn: false };
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
    }

    logout(props) {
        axios.get('api/logout')
            .then(res => {
                this.setState({ loggedIn: false });
                props.history.push('/');
            })
            .catch(err => console.log(err));
        return null;
    }

    login() {
        this.setState({ loggedIn: true });
    }

    render() {
        return (
            <div>
                <div className="navbar is-primary">
                    <a className="navbar-item has-background-primary" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
                    </a>

                    <ul className="navbar-brand is-primary">
                        <li className="navbar-item has-background-primary"><Link to="/">Home</Link></li>
                        <li className="navbar-item has-background-primary"><Link to="/secret">Secret</Link></li>
                        {this.state.loggedIn && <li className="navbar-item has-background-primary"><Link to="/userlist">UserList</Link></li>}

                        {!this.state.loggedIn && <li className="navbar-item has-background-primary"><Link to="/login">Login</Link></li>}
                        {!this.state.loggedIn && <li className="navbar-item has-background-primary"><Link to="/register">Register</Link></li>}
                        {this.state.loggedIn && <li className="navbar-item has-background-primary"><Link to="/logout">Logout</Link></li>}
                    </ul>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/userlist" exact component={UserList} />

                    <Route path="/secret" component={withAuth(Secret)} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={(props) => <Login {...props} handleLogin={this.login} />} />
                    <Route path="/logout" render={this.logout} />
                </Switch>
            </div>
        );
    }
}

export default App;
