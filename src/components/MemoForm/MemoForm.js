import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const MemoForm = (props) => {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please enter the text for your memo note here:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Button variant="info" type="submit">Add a Note</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default MemoForm;