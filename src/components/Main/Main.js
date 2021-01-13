import React, { useState, useEffect } from 'react';
import './Main.css'
import Memo from '../Memo/Memo'
import axios from "axios";



const Main = () => {
    const[memos, setMemos] = useState([]);

    
    useEffect(() => {
        axios.get("http://localhost:3001/posts/").then((response) => {
        setMemos(response.data);
        });
    }, []);   

    const memoList = memos.map((p) => {

    return (
        <Memo 
        text={p.memo}
        />
    );
});

return (
    
    <div id="main"><div id="memo_grid">{memoList}</div></div>
    
);

};
export default Main;


// class main extends Component {

//     state = {
//         memos: [
//             {
//                 text: "Football practice"
//             },
//             {
//                 text: "Band practice"
//             },
//             {
//                 text: "Do laundry"
//             }
//         ]
//     }

//     render() {
//         const noteList = this.state.memos.map((memo)=>{

//             return (
//                 <Memo 
//                 text={memo.text}/>
//             );
//         });
//         return <div id="main"><div id="memo_grid">{noteList}</div></div>
//     }
// }

// export default main;