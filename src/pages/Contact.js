import React from 'react';
import 'simpledotcss/simple.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

 const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
   const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });
   const handleSubmit = (values, { resetForm }) => {
    console.log('Form data:', values);
    resetForm();
  };
   return (
    <section>
      <div className="contact-content">
        <h2>Contact Me</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div>
                <Field type="text" name="name" placeholder="Your Name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div>
                <Field type="email" name="email" placeholder="Your Email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div>
                <Field component="textarea" name="message" placeholder="Your Message" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
 export default Contact;