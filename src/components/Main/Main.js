import React, { Component } from 'react';
import './Main.css'
import Memo from '../Memo/Memo'



class main extends Component {

    render() {
        return (
            <div id="main">
                <div id="memo_grid">
                    <Memo />
                    <Memo />
                    <Memo />
                </div>
            </div>
        );
    }
}

export default main;