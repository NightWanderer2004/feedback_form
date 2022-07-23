import { Formik } from 'formik'
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
               alert(JSON.stringify(values, null, 2))

               setSubmitting(false)
            }, 400)
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
