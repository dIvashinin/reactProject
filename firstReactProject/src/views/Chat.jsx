import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  // import (subscribe) user from the context
  const {user} = useContext(AuthContext);

  //2.Store messages in a variable (state variable)
  const [chatMessages, setChatMessages] = useState([]);

 //5. Store message when we type
 const [textMsg, setTextMsg] = useState("");

 //6. Create function to store typed text in textMsg variable
// we do it directly in the input

  //1.Get documents from our Database
  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      console.log("doc :>> ", doc.data());
      console.log(`${doc.id} => ${doc.data()}`);
      messagesArray.push(doc.data());
    });
    console.log('messagesArray :>> ', messagesArray);
    // we got messages, then we need to store them:
    setChatMessages(messagesArray);
  };

  //in order to correctly display our date, we need to transform it
  const formatDate = (date) => {
    // console.log('date :>> ', typeof date, date);
    // console.log('now :>> ', new Date(9999912443111));
    // we multiply seconds by *1000 in order to have milliseconds
    const formattedDate = new Date(date*1000).toLocaleString();
    console.log('formattedDate :>> ', formattedDate);
    return formattedDate;
  };

    //7. Create a function to send messages to DB
  const submitMessage = async () => {
    console.log('textMsg :>> ', textMsg);
    const newChatMsg = {
        // if the user exists, then
        author: user?.email,
        text: textMsg,
        date: new Date()
    };
    console.log('newChatMsg :>> ', newChatMsg);
    // store the newChatMsg in my Database
    const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("Document written with ID: ", docRef.id);
  };

//   get messages with live update
  const getMessagesLiveUpdate = () => {
    const q = query(collection(db, "chat"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const messagesArray = [];
  querySnapshot.forEach((doc) => {
    messagesArray.push(doc.data());
  });
  console.log('messagesArray :>> ', messagesArray);
  setChatMessages(messagesArray);
});
  }

  useEffect(() => {
    getMessages();
    getMessagesLiveUpdate();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
    {/* 4. Crete input to write message */}
    <div>
    <form id="myForm">
        <input id="myChatInput" type="text" onChange={(event)=>{
            setTextMsg(event.target.value);
        }}/>
        <button onClick={submitMessage}>send</button>
        </form>
    </div>

      {/* 3. Display messages here */}
      <div>
    {chatMessages && chatMessages.map((msg, index) =>{
            return ( 
            <div key={index} className="chat-container">
              <p>author: {msg.author}</p> 
              <p>message: {msg.text}</p> 
              <p>sent: {formatDate(msg.date.seconds)}</p> 
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Chat;
