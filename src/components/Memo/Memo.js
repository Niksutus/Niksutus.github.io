import React from 'react';
import './Memo.css'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Memo = () => {
    return (
        // <div className="memo"></div>
        <Card style={{width:'18rem'}}>
            <Card.Body>
                <Card.Title>Sample Card</Card.Title>
            </Card.Body>

        </Card>
    );
};

export default Memo;