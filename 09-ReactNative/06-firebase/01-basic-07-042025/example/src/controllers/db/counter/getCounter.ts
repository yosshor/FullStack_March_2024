import { doc, onSnapshot } from "firebase/firestore";
import {db} from '../config';

export function listenToCounter(setCounter: (counter: number) => void):Function {
    // Listen to the counter document in the database
    const counterRef = doc(db, "counter", "counter");
    
    return onSnapshot(counterRef, (doc) => {
        const data = doc.data();
        if (data?.counter) {
            setCounter(data.counter);
        }
    });
}