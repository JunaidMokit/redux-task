import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../redux/feature/taskSlice"

export const store = configureStore({
    reducer: {
        todo: taskReducer
    },

})

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;