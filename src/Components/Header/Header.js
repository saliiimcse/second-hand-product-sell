import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImMobile } from 'react-icons/im';
import { AuthContext } from '../Context/Context';
import './Header.css'
import { Button } from 'react-bootstrap';



const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const activeRoute = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#F3CCFF' : '#F7F5EB'
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            <Navbar className='bg-success' variant="success">
                <Container className=''>
                    <Navbar.Brand ><ImMobile /> Used Mobile Shop</Navbar.Brand>
                    <Nav className="me-auto header-style">
                        <NavLink className="me-2 p-1 rounded" style={activeRoute} to='/'>Home</NavLink>

                        {user?.uid &&
                            <NavLink className="me-2 p-1 rounded" style={activeRoute} to='/dashboard'>Dashboard</NavLink>
                        }

                        <NavLink className="me-2 p-1 rounded" style={activeRoute} to='/blog'>Blog</NavLink>
                    </Nav>

                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className="btn btn-light btn-sm">Sign Out</button>
                            :
                            <button btn btn-light btn-sm><NavLink className="me-2 text-bg-light px-2" to='/login'>Login</NavLink></button>
                    }
                </Container>
            </Navbar>
        </>
    );
};

export default Header;