import { Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postData } from '../../slices/formSlice'
import InputGroup from './InputGroup'
import SubmitButton from './SubmitButton'

const Message = styled.p`
   color: gray;
   font-weight: 600;
   font-size: 20px;
   margin-bottom: 12px;
`

const ContactForm = () => {
   const dispatch = useDispatch()
   const { message } = useSelector(state => state.formFeedback)

   return (
      <Formik
         initialValues={{ name: '', email: '', message: '' }}
         validate={values => {
            const errors = {}

            if (!values.email) errors.email = 'Enter email'
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address'
            if (!values.name) errors.name = 'Enter name'
            if (!values.message) errors.message = 'Enter message'

            return errors
         }}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               const userData = JSON.stringify(values, null, 2)

               dispatch(postData(userData))
               values.name = ''
               values.email = ''
               values.message = ''

               setSubmitting(false)
            }, 220)
         }}
      >
         {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
               <Message>{message}</Message>
               <InputGroup
                  field='input'
                  errors={errors.name && touched.name && errors.name}
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
               />

               <InputGroup
                  field='input'
                  errors={errors.email && touched.email && errors.email}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
               />

               <InputGroup
                  field='textarea'
                  errors={errors.message && touched.message && errors.message}
                  type='text'
                  name='message'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
               />
               <SubmitButton type='submit' disabled={isSubmitting} />
            </form>
         )}
      </Formik>
   )
}

export default ContactForm
