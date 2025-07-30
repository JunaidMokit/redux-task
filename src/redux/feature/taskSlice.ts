import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "./type";
import type { RootState } from "../store";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "p91TGU4b6WU3-0UUJWMeS1",
            isCompleted: false,
            title: "Junaid",
            description: "Bad Man",
            priority: "Medium",
            dueDate: "2025-07-02T18:00:00.000Z",
        },
        {
            id: "p91TGU4b6WU3-0UUJWMeS8",
            isCompleted: false,
            title: "Junaid",
            description: "Bad Man",
            priority: "Medium",
            dueDate: "2025-07-02T18:00:00.000Z",
        },
        {
            id: "p91TGU4b6WU3-0UUJWMeS9",
            isCompleted: false,
            title: "Junaid",
            description: "Bad Man",
            priority: "Medium",
            dueDate: "2025-07-02T18:00:00.000Z",
        }
    ],
    filter: "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload ?
                    (task.isCompleted = !task.isCompleted) : task)
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        }

    }
})

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
}

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;