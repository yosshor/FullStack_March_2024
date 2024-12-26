import { createContext } from "react";

const initialState = {mode: 'grey', toggleTheme: () => {}}

export const GreyContext = createContext(initialState);