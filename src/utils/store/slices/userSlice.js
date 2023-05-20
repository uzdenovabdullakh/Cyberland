import { createSlice } from '@reduxjs/toolkit' 
const initialState = {
        id: sessionStorage.getItem('id') || null,
        customerId: sessionStorage.getItem('customerId') || null,
        executorId: sessionStorage.getItem('executorId') || null,
        email: sessionStorage.getItem('email') || null,
        token: sessionStorage.getItem('token') || null,
        name: sessionStorage.getItem('name') || null,
        secondName: sessionStorage.getItem('secondName') || null,
        phone: sessionStorage.getItem('phone') || null,
        technologies: sessionStorage.getItem('technologies') || null,
        experience: sessionStorage.getItem('experience') || null,
        employment: sessionStorage.getItem('employment') || null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.name = action.payload.name
            state.secondName = action.payload.secondName
            state.phone = action.payload.phone
        },
        removeUser(state){
            state.email = null
            state.token = null
            state.id = null
            state.customerId = null
            state.executorId = null
            state.name = null
            state.secondName = null
            state.phone = null
            state.employment = null
            state.technologies = null
            state.experience = null
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('id')
            sessionStorage.removeItem('phone')
            sessionStorage.removeItem('email')
            sessionStorage.removeItem('name')
            sessionStorage.removeItem('secondName')
        },
        setCustomer (state, action){
            state.employment = action.payload.employment
        },
        setExecutor(state,action){
            state.technologies = action.payload.technologies
            state.experience = action.payload.experience
        },
    }
})

export const {setUser,removeUser,setCustomer,setExecutor} = userSlice.actions
export default userSlice.reducer