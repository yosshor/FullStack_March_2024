// import { UserModel } from "./userModel";
// import React, { createContext, useContext, useState } from "react";


// interface UserContextType {
//     user: UserModel | null;
//     registerUser: (data: UserModel) => Promise<void>;
//   }
  
//   const UserContext = createContext<UserContextType | undefined>(undefined);
  
//   export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<UserModel | null>(null);
  
//     const registerUser = async (data: UserModel) => {
//       try {
//         // Simulate API call
//         const response = await fetch("http://localhost:3000/api/users/register", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         });
  
//         if (!response.ok) throw new Error("Registration failed");
  
//         const result = await response.json();
//         setUser(result); // 
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     return (
//       <UserContext.Provider value={{ user, registerUser }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };
  
//   export const useUser = () => {
//     const context = useContext(UserContext);
//     if (!context) throw new Error("useUser must be used within UserProvider");
//     return context;
//   };