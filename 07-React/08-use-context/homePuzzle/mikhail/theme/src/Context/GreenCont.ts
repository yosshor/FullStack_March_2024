import { createContext } from "react";

const initialState = {mode: 'green', toggleTheme: () => {}}

export const GreenContext = createContext(initialState);