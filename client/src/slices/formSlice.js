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
      setError: state => {
         state.message = 'Sorry, something went wrong'
      },
   },
})
export const postData = userData => {
   return async dispatch => {
      axios
         .post('/api/user', JSON.parse(userData))
         .then(res => dispatch(setMessage(res.data.message)))
         .catch(err => dispatch(setError()))
   }
}

export const { setMessage, setError } = formSlice.actions
export const formSelector = state => state.formFeedback

export default formSlice.reducer
