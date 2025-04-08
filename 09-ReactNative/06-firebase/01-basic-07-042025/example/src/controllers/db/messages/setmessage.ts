import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

export async function addMessageToDB(message: string) {
    // Save the message to the database
    const messageRef = collection(db,"messages")// reference to the document in the database

    //save in the database
    const msg = await addDoc(messageRef, {message:message});
    console.log("Document written with ID: ", msg.id);
}