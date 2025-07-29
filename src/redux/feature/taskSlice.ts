import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "./type";
import type { RootState } from "../store";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "arr",
            title: "Initial Frontend",
            description: "goood",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "arr2",
            title: "Initial Frontend",
            description: "goood",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low"
        }
    ],
    filter: "all"
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;