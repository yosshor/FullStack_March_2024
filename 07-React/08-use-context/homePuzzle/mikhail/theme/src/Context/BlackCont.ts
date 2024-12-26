import { createContext } from "react";

const initialState = {mode: 'black', toggleTheme: (color: string) => {}}

export const BlackContext = createContext(initialState);