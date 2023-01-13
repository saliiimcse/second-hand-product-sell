import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth'
import app from '../FireBase/FireBase.config';
import { AuthContext } from '../Context/Context';
import { FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    const { googleSignIn, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    console.log(location.state?.from?.pathname);


    const auth = getAuth(app);
    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;

                if (user) {
                    navigate(from, { replace: true });
                    console.log(user);

                }
            })
    }



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {

                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        role: '1'
                    };
                    fetch(`https://server-side-12.vercel.app/user/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                navigate(from, { replace: true });
                            }
                        })
                }
            })
            .catch(error => {
                console.log('error: ', error);
            })
    }

    return (
        <div className='container w-50 mx-auto bg-secondary p-5 m-2' style={{
            height: 'calc(100vh - 99px)'
        }}>
            <Form onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                <p className='text-light mt-2'>Don't have an account? <Link to='/register' className='text-danger bg-warning p-2 rounded'>Register</Link></p>

            </div>
            <div className='mt-5'>
                <Button onClick={handleGoogleSignIn} className='me-2' variant="outline-warning text-light">Login with <FaGoogle /></Button>
            </div>
        </div>
    );
};

export default LogIn;