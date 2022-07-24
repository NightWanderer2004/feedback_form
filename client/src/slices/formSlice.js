import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
   message: '',
}

export const formSlice = createSlice({
   name: 'formFeedback',
   initialState,
   reducers: {
      setMessage: (state, action) => {
         state.message = action.payload
      },
   },
})
export const postData = userData => {
   return async dispatch => {
      axios
         .post('/api/user', JSON.parse(userData))
         .then(res => dispatch(setMessage(res.data.message)))
         .catch(err => console.error(err))
   }
}

export const { setMessage } = formSlice.actions
export const formSelector = state => state.formFeedback

export default formSlice.reducer
