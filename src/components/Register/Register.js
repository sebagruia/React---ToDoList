import React, { useState } from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <Form className="register-form justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="label">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required />
                            <Form.Control.Feedback type="invalid">Please type your name</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Control.Feedback type="invalid">Please type an email address</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">Please type your password</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Register
                        </Button>
                    </Form>
                </div>
            </div>

        </div>

    );




}


export default Register;