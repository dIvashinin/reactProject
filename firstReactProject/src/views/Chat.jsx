import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

function Chat() {
  //2.Store messages in a variable (state variable)
  const [chatMessages, setChatMessages] = useState({});

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

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      {/* Display messages here */}
      <div>
        {chatMessages && chatMessages.map((msg) =>{
            return <div>
              <p>{msg.author}</p> 
              <p>{msg.text}</p>  
            </div>
        })}
      </div>
    </div>
  );
}

export default Chat;
