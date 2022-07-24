import { Formik } from 'formik'
import axios from 'axios'
import InputGroup from './InputGroup'
import SubmitButton from './SubmitButton'

const ContactForm = () => {
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
               axios.post('/api/user', JSON.stringify(values, null, 2)).catch(err => console.error(err))

               values.name = ''
               values.email = ''
               values.message = ''

               setSubmitting(false)
            }, 220)
         }}
      >
         {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
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
