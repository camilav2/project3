import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
            <h1>Welcome to our WineLovers</h1>
            <h2> If you want to share your passion and discover more about wines all over the word, this is the place to be!</h2>
            <p>First time? <Link to='/auth/signup'>Sign Up</Link></p>
            <p>Already an user? <Link to='/auth/login'>Login</Link></p>
            </div>
        )
    }
}