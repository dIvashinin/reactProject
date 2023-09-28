import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebaseConfig';

function Chat() {


    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "chat"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
    };

useEffect(() => {
  getMessages();
}, []);


  return (
    <div>
        <h1>Chat</h1>
    </div>
  );
}

export default Chat