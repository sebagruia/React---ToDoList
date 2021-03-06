import React, { useState } from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = ({onRouteChange, loadUser, changeLogStateToTrue}) => {

    const [validated, setValidated] = useState(false);
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
    }
    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);
    }
    const onPassChange = (event) => {
        setRegisterPass(event.target.value);
    }

    const onRegisterClick = ()=>{
        fetch('https://limitless-atoll-58976.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:registerName,
                email: registerEmail,
                password: registerPass
            })
        })
            .then(response=>response.json())
            .then(user=>{
                if(user.name){
                    loadUser(user);
                    onRouteChange('home');
                    changeLogStateToTrue();
                }
            })
       }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <Form className="register-form justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="label">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required onChange={onNameChange}/>
                            <Form.Control.Feedback type="invalid">Please type your name</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required onChange={onEmailChange} />
                            <Form.Control.Feedback type="invalid">Please type an email address</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required onChange={onPassChange} />
                            <Form.Control.Feedback type="invalid">Please type your password</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={onRegisterClick} >
                            Register
                        </Button>
                    </Form>
                </div>
            </div>

        </div>

    );
}


export default Register;