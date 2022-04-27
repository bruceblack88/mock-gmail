import React, {useEffect, useId, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [emails, setEmails] = useState([]);
    const [email, setEmail] = useState([]);
    const [result, setResult] = useState([]);
    const [search,setSearch ] = useState([]);


    useEffect(() => {
        // const getEmails = async () => {
        //     const response = await fetch("http://localhost:3001/emails")
        //     const data = await response.json();
        //     setEmails(data);
        // }
        // const getEmail = async () =>{
        //     const response = await fetch("http://localhost:3001/emails/1")
        //     const data = await response.json();
        //     setEmail(data);
        // }
        // const getResult = async () => {

            // const response = await fetch("http://localhost:3001/send", {
            //     mode: 'cors',
            //     method: 'POST',
            //     body: {
            //         "sender": "b@gmail",
            //         "recipient": "j@gmail",
            //         "subject": "Testing",
            //         "message": "alksdjflkasd;lkfjlas;kdjf"
            //     }
            // })
            // const data = await response.json();

            //     const data = await axios.post("http://localhost:3001/send",
            //         {
            //                 "sender": "b@gmail",
            //                 "recipient": "j@gmail",
            //                 "subject": "Testing",
            //                 "message": "alksdjflkasd;lkfjlas;kdjf"
            //             }
            //         )
            //     console.log(data)
            //     setResult(data.data);
            // }
            // getEmails();
            // getEmail();
            // getResult();

            const getSearch = async () => {
                const response = await fetch("http://localhost:3001/search?query=meeting")
                const data = await response.json();
                setSearch(data);
            }
            getSearch();


    }, [])


    return (
        <div className="App">
            {/*{emails.map((emails => {*/}
            {/*    return (*/}
            {/*        <div key={emails}>*/}
            {/*            <h1>Sender</h1>*/}
            {/*            <h2>{emails.sender}</h2>*/}
            {/*            <h1>Subject</h1>*/}
            {/*            <h2>{emails.subject}</h2>*/}
            {/*            <hr/>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}))}*/}

            {/*{email.map((email => {*/}
            {/*        <div key={email}>*/}
            {/*            <h1>Sender</h1>*/}
            {/*            <p>{email.sender}</p>*/}
            {/*            <h1>Recipient</h1>*/}
            {/*            <p>{email.recipient}</p>*/}
            {/*            <h1>Subject</h1>*/}
            {/*            <p>{email.subject}</p>*/}
            {/*            <h1>Message</h1>*/}
            {/*            <p>{email.message}</p>*/}
            {/*            <h1>Date</h1>*/}
            {/*            <p>{email.date}</p>*/}
            {/*            <h1>ID</h1>*/}
            {/*            <p>{email.id}</p>*/}
            {/*            <hr/>*/}
            {/*        </div>*/}
            {/*}))}*/}

            {/*<div>*/}
            {/*    <h1>Return</h1>*/}
            {/*    <p>{result.status}</p>*/}
            {/*    <p>{result.message}</p>*/}
            {/*    <hr/>*/}
            {/*</div>*/}

            {search.map((emails=> {
                return (
                    <div>
                                    <h1>Sender</h1>
                                    <p>{emails.sender}</p>
                                    <h1>Recipient</h1>
                                    <p>{emails.recipient}</p>
                                    <h1>Subject</h1>
                                    <p>{emails.subject}</p>
                                    <h1>Message</h1>
                                    <p>{emails.message}</p>
                                    <h1>Date</h1>
                                    <p>{emails.date}</p>
                                    <h1>ID</h1>
                                    <p>{emails.id}</p>
                                    <hr/>
                    </div>
                )
            }))}
        </div>
    );
}

export default App;
