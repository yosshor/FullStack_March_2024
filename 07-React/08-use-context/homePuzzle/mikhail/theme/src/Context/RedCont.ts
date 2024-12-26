import { createContext } from "react";

const initialState = {mode: 'red', toggleTheme: () => {}}

export const RedContext = createContext(initialState);