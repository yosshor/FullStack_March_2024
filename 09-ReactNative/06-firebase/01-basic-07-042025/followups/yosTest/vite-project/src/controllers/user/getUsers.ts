import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { db } from "../db/firebaseConfig";

export function listenToUsers(setUsers: (users: { name: string, email: string, password: string }[]) => void): Function {
  // Listen to the messages collection in the database
  const usersRef = collection(db, "users"); // reference to the collection in the database

  return onSnapshot(usersRef, (snapshot) => {
    const users: { name: string, email: string, password: string }[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data?.name) {
        users.push({ name: data.name, email: data.email, password: data.password });
      }
    });
    setUsers(users);
  });
}
