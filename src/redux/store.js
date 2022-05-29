import { configureStore } from '@reduxjs/toolkit'
import TeamReducer from './slices/team.slice';

export const store = configureStore({
    reducer: {
      team: TeamReducer,
    },
});