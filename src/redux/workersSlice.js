import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workers: JSON.parse(localStorage.getItem('workers')) || [],
    total: JSON.parse(localStorage.getItem('total')) || 0
}

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        addWorkers: (state, action) => {
            state.workers = [...state.workers, action.payload]
            localStorage.setItem('workers', JSON.stringify(state.workers))
            state.total = state.total + 1
            localStorage.setItem('total', state.total)
        }
    }
})

export const { addWorkers } = workersSlice.actions
const workerReducer = workersSlice.reducer

export default workerReducer