import React, { Component } from 'react';
import AuthService from '../Auth/AuthService';
import {Link} from 'react-router-dom';

export default class login extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
        .then( response => {
            this.setState({ username: "", password: "" });
            this.props.getUser(response)
        })
        .catch( error => console.log(error) )
      }
        
      handleDetails = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
   
    render() {
        return (
            <div>
                <form className="col-4" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            aria-describedby="username"
                            onChange={(e) => this.handleDetails(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            aria-describedby="password"
                            onChange={(e) => this.handleDetails(e)}
                        />
                        
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <p>If you don't have an account yet, you can create your account <Link to="/auth/signup"> here</Link> </p>
                </form>
                <h2>Hello!!</h2>
                <h2>Welcome to WineLovers</h2>
            </div>
        )
    }
}
