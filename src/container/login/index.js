import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            pages:"登录页"
        }
    }
    render() {
        
        return <h2>{ this.state.pages }</h2>
    }
}
export default Login