import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../db/firebaseConfig";
import { collection, doc } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

export async function setUser(name: string, email: string, password: string) {
  try {
    const userRef = collection(db, "users"); // reference to the document in the database

    //save in the database
    const docRef = await addDoc(userRef, {
      name: name,
      email: email,
      password: password,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export function getUser() {
  const user = auth.currentUser;
  console.log(user);
}
