import { doc, onSnapshot } from 'firebase/firestore';
import { db } from "../db/firebaseConfig";

export function listenToCounter(setCounter: (value: number) => void) {
  const counterRef = doc(db, 'counter', 'counter');
  
  return onSnapshot(counterRef, (doc) => {
    // console.log('Counter document data:', doc.data()); // Add logging
    if (doc.exists()) {
      const data = doc.data();
      if (data && typeof data.counter === 'number') {
        setCounter(data.counter);
      }
    }
  }, (error) => {
    console.error('Error listening to counter:', error);
  });
}   
