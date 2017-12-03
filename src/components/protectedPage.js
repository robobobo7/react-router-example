import React, { Component } from 'react';

export class ProtectedPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h3>You need to login</h3>
            )
    }
}