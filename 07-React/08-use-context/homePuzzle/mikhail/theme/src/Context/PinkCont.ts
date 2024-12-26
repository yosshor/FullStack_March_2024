import { createContext } from "react";

const initialState = {mode: 'pink', toggleTheme: () => {}}

export const PinkContext = createContext(initialState);