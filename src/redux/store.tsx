import { useDispatch } from "react-redux";
import getAllCategoriesSlice, { getAllCategories, openCategories } from "./slice/categories";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

const reducer = combineReducers({
    categories:getAllCategoriesSlice,
})

export const store = configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({serializableCheck:false})
})

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
// export type RootState = ReturnType<typeof store.getState>