// import { Client } from "../../model/userModel";

export const registerToDB = async (clientData: { email: string, password: string }):Promise<{result:any}> => {
    try {
        const response = await fetch('http://localhost:3000/api/clients/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientData),
            credentials: 'include'
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Registration failed');
        }

        const result = await response.json();

        return {result}
    } catch (error) {
        console.error('Error setting user:', error);
        throw error;
    }
};