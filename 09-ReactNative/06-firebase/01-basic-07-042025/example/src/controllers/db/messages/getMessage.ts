import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config";

export function listenToMessages(setMessages: (messages: string[]) => void):Function {
    // Listen to the messages collection in the database
    const messagesRef = collection(db, "messages"); // reference to the collection in the database

   return onSnapshot(messagesRef, (snapshot) => {
        const messages: string[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data?.message) {
                messages.push(data.message);
            }
        });
        setMessages(messages);
    });
}