import React, { Component } from 'react';
import Image from './Image';
import Title from './Title';
import Desc from './Desc';
import './boxCSS.css';

class Box extends Component {
    render(){
        return(
            <div className="outter">
                <Image/>
                <Title title="A Title"/>
                <Desc desc="This is Description"/>
            </div>
        );
    }
}

export default Box;