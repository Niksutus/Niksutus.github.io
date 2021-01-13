import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';


const header = (props) => {
    return (
        <header id="header">
            <h1>Memo<span id="logo_color">Board</span></h1>
            {/* <button onClick={props.click}>Add a note</button> */}
            <Button onClick={props.click}variant="success">Add a Note</Button>
        </header>
    );
};

export default header;