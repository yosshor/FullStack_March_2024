import { createContext } from "react";

const initialState = {mode: 'orange', toggleTheme: () => {}}

export const OrangeContext = createContext(initialState);