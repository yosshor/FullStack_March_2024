import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../db/firebaseConfig";

export async function deleteUser(email: string) {
  try {
    // Create a query to find the document with matching email
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    
    // Get the documents matching the email
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.error(`User with email ${email} not found`);
      return false;
    }

    // Delete the document using its ID
    const userDoc = querySnapshot.docs[0];
    await deleteDoc(userDoc.ref);
    
    console.log(`User ${email} deleted successfully`);
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
