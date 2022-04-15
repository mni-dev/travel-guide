import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCreateUser = () =>{
        navigate();
    }

    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <h1>Please Login</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <p>New to Travel-Guide? <span><Link to="/register">Create an account.</Link> </span> </p>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;