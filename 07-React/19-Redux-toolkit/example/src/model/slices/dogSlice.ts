import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DogState {
    dog: {
        message: string,
        status: string
    } | null
}

const initialState: DogState = {
    dog: null
}

export const dogSlice = createSlice({
    name: 'dog',
    initialState,
    reducers: {
        setDog: (state, action: PayloadAction<{ message: string, status: string }|null>) => {
            state.dog = action.payload
        },
    },
})

export const { setDog } = dogSlice.actions;

export const selectDog = (state: { dog: DogState }) => state.dog.dog;

export default dogSlice.reducer;