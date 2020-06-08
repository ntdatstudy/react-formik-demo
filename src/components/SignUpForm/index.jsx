import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Spinner } from 'react-bootstrap';

import './SignUpForm.scss';

const SignUpForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, 'First name must be 15 characters or less.')
            .required('First name is required.'),
        lastName: Yup.string()
            .max(15, 'Last name must be 15 characters or less.')
            .required('Last name is required.'),
        email: Yup.string()
            .email('Invalid email address.')
            .required('Email address is required.'),
        password: Yup.string()
            .max(15, 'Password must be 15 characters or less.')
            .required('Password is required.'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        }, 1000);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Form 
                    className="signup-form" 
                    onSubmit={formik.handleSubmit}
                >
                    <Form.Group controlId="firstName">
                        <Form.Control className={formik.touched.firstName && formik.errors.firstName ? 'error' : ''} {...formik.getFieldProps('firstName')} />
                        <Form.Label>First Name</Form.Label>
                        <ErrorMessage className="error-input" component="span" name="firstName" />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Control className={formik.touched.lastName && formik.errors.lastName ? 'error' : ''} {...formik.getFieldProps('lastName')} />
                        <Form.Label>Last Name</Form.Label>
                        <ErrorMessage className="error-input" component="span" name="lastName" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control className={formik.touched.email && formik.errors.email ? 'error' : ''} {...formik.getFieldProps('email')} />
                        <Form.Label>Email</Form.Label>
                        <ErrorMessage className="error-input" component="span" name="email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control className={formik.touched.password && formik.errors.password ? 'error' : ''} type="password" {...formik.getFieldProps('password')} />
                        <Form.Label>Password</Form.Label>
                        <ErrorMessage className="error-input" component="span" name="password" />
                    </Form.Group>
                    <Button type="submit">
                        {formik.isSubmitting && <Spinner className="mb-1 mr-2" size="sm" animation="border" />}
                        Sign Up
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default SignUpForm;