import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

function Chat() {
  //2.Store messages in a variable (state variable)
  const [chatMessages, setChatMessages] = useState([]);

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
    const formattedDate = new Date(date*1000).toLocaleString();
    console.log('formattedDate :>> ', formattedDate);
    return formattedDate;
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
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
