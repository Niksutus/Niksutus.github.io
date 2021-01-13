import React from 'react';
import './Memo.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Memo = (props) => {
    return (
        // <div className="memo"></div>
        <Card style={{width:'18rem', height: '10rem'}}>
            <Card.Body>
                <Card.Title>{props.text}</Card.Title>
                <Button variant="info">Remove note</Button>
            </Card.Body>

        </Card>
    );
};

export default Memo;