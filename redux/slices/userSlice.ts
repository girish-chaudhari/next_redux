import { createSlice } from "@reduxjs/toolkit"

interface userType {
    userAuthenticated: Boolean,
    userAuthenticating: Boolean,
    user: Object,

}


const initialState: userType = {
    userAuthenticating: false,
    userAuthenticated: false,
    user: {}
}

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRequest: (state: any, action: any) => {
            return {
                ...state, userAuthenticating: true,
                userAuthenticated: false
            }
        },
        userSuccess: (state: any, action: any) => {
            console.log(action)
            return {
                ...state, userAuthenticating: false,
                userAuthenticated: true,
                user: action.payload
            }
        },
        userFailure: (state: any, action: any) => {
            return {
                ...state, userAuthenticating: false,
                userAuthenticated: true,
            }
        }
    }

})

export const { userRequest, userSuccess, userFailure } = usersSlice.actions

export default usersSlice.reducer