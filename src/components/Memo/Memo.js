import React from 'react';
import './Memo.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Memo = () => {
    return (
        // <div className="memo"></div>
        <Card style={{width:'18rem', height: '10rem'}}>
            <Card.Body>
                <Card.Title>Sample Card</Card.Title>
                <Button variant="info">Remove Note</Button>
            </Card.Body>

        </Card>
    );
};

export default Memo;