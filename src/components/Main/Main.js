import React from 'react';
import './Main.css'
import Memo from '../Memo/Memo'

const main = () => {
    return (
        <main >
            <h1>The main contents will be here</h1>
            <div id="memo_grid">
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
                <Memo />
            </div>
        </main>
    );
};

export default main;