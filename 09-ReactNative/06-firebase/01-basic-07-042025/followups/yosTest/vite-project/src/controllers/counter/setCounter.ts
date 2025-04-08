import { db } from "../db/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function setCounterToDb(value: number) {
  try {
    const counterRef = doc(db, 'counter', 'counter');
    await setDoc(counterRef, { counter: value }, { merge: true });
    // console.log('Counter updated successfully:', value); // Add logging
  } catch (error) {
    console.error('Error updating counter:', error);
  }
}
