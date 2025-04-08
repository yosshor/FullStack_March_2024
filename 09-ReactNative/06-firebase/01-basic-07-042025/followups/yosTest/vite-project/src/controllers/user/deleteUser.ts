import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../db/firebaseConfig";

export async function deleteUser(email: string) {
  try {
     // Create a direct reference to the user document
     const userDocRef = doc(db, "users", email);
    
     // Delete the document
     await deleteDoc(userDocRef);

    // const userRef = collection(db, "users");
    // const userDoc = doc(userRef, email);
    // // await deleteDoc(userDoc);
    // await deleteDoc(doc(collection(db, "users"), email));
    console.log(`User ${email} deleted successfully`);
  } catch (error) {
    console.error(error);
  }
}
