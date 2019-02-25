import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            pages:"首页"
        }
    }
    render() {
        return <h2>{ this.state.pages }</h2>
    }
}
export default Home