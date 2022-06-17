import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

// import users from './usersSlice'
// import counter from './counterSlice'
import userData from './slices/userSlice';

const combinedReducer = combineReducers({
    userData,
});

interface actionType {
    type: String,
    payload: Object | any
}

const masterReducer = (state: any, action: actionType) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            user: { ...action.payload }
        }
        return nextState;
    } else {
        return combinedReducer(state, action)
    }
}

export const makeStore = () =>
    configureStore({
        reducer: masterReducer,
    });

export const wrapper = createWrapper(makeStore, { debug: true });