import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const RegistrationForm = () => (
    <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log('Form submitted:', values);
        }}
    >
        {() => (
            <Form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="p" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="p" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="p" />
                </div>
                <button type="submit">Register</button>
            </Form>
        )}
    </Formik>
);

export default RegistrationForm;
