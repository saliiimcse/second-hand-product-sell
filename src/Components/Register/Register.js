import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import app from '../FireBase/FireBase.config';
import { BiLogIn } from 'react-icons/bi';



const auth = getAuth(app);

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const users1 = (userInfo) => {

        fetch('https://server-side-12.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/')
                }
            })
    }

    const handleForm = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const role = form.role.value;

        console.log(role);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                        .then(() => {
                            const userInfo = {
                                name: user?.displayName,
                                email: user?.email,
                                role: role
                            };

                            users1(userInfo);
                        }).catch((error) => {
                            // An error occurred
                            // ...
                            setErrorMessage(error.message);
                        });
                    setSuccess(true);
                    form.reset();
                }

            })
            .catch(error => {
                console.error('error', error);
            })

    }


    return (
        <div className='container bg-secondary mx-auto w-50 p-5 m-2' style={{
            height: 'calc(100vh - 99px)'
        }}>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Select a role</Form.Label>
                    <Form.Select defaultValue="" required>
                        <option value={1}>Buyer</option>
                        <option value={2}>Seller</option>
                    </Form.Select>
                </Form.Group>

                <p style={{ color: 'red' }}>{errorMessage}</p>
                {success && <p className='text-success'>Created User Successfully</p>}
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                <p className='text-light mt-2'>Already have an account? <Link to='/login' className='text-danger bg-white p-2 rounded'>Login <BiLogIn /></Link></p>
            </div>
        </div>
    );
};

export default Register;