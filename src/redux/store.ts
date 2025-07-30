import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../redux/feature/taskSlice"
import { baseApi } from "./api/baseApi";

export const store = configureStore({
    reducer: {
        todo: taskReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;