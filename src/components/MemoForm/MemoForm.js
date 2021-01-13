import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './MemoForm.css'
import axios from "axios";

// const MemoForm = (props) => {
//     return (
//         <div className="overlay">
//             <Form>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Please enter the text for your memo note here:</Form.Label>
//                     <Form.Control as="textarea" id="textarea" rows={3} />
//                     <Button id="button" variant="info" type="submit">Add a Note</Button>
//                 </Form.Group>
//             </Form>
//         </div>
//     );
// };

// export default MemoForm;

const MemoForm = (props) => {
    const [NewMemo, setNewMemo] = useState({
        textarea: "",
    })

    const changeValueHandler = (e) => {
        setNewMemo({
          ...NewMemo,
          [e.target.name]: e.target.value,
        });
      };

      const addMemoHandler = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:3001/posts", NewMemo).then((response) => {
          console.log(response.data);
        });
      };  
  
    return (
        <div className="overlay">
            <Form onSubmit={addMemoHandler} >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please enter the text for your memo note here:</Form.Label>
                    <Form.Control as="textarea" id="note" onChange={changeValueHandler} rows={3} />
                    <Button id="button" variant="info" type="submit">Add a Note</Button>
                    <Button id="button" variant="info" onClick={props.close}>Close</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default MemoForm;