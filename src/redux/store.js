import { configureStore } from '@reduxjs/toolkit'
import breezyReducer from './breezySlice'

export const store = configureStore({
  reducer: {
    bazar: breezyReducer,
  },
})