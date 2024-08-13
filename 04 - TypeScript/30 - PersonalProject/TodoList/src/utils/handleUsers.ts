import { Email } from '../models/email';
import { getAllInfoByEmail } from '../controllers/indexedDb'



export function getEmailInfo(mail: string): Email | null | undefined | void {
    // Usage example
    getAllInfoByEmail(mail)
        .then((data: string | any[]) => {
            if (data.length > 0) {
                console.log("Data found:", data);
                return data;
            } else {
                console.log("No data found for this email.");
                return null;
            }
        })
        .catch((error: any) => console.error(error));
}