import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import { UserInfoContext } from '../Context/UserContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const { userInfo } = useContext(UserInfoContext);

    const [userData, setUserData] = useState({});
    console.log(userData);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-side-12.vercel.app/user?email=${user?.email}`);
                const jsonData = await response.json();
                setUserData(jsonData[0]);
                // setUserInfo(jsonData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [user]);
    return (
        <div className='container' style={{
            height: 'calc(100vh - 99px)'
        }}>
            <Row>
                <Col xs={3}>
                    <ul>
                        {
                            userData?.role == '3' && <>
                                <li><Link className="me-2 p-1 rounded" to='/dashboard/allsellers'>All Sellers</Link>
                                </li>

                                <li><Link className="me-2 p-1 rounded" to='/dashboard/allbuyers'>All Buyers</Link>
                                </li>
                            </>
                        }
                        {
                            userData?.role == '2' || userData?.role == '3' ? <>
                                <li><Link className="me-2 p-1 rounded" to='/dashboard/addproducts'>Add Product</Link>
                                </li>
                                <li>
                                    <Link className="me-2 p-1 rounded" to='/dashboard/myproducts'>My Products</Link>
                                </li>
                            </>
                                : ""

                        }

                        {
                            userData?.role == '1' || userData?.role == '3' ? <>
                                <li><Link className="me-2 p-1 rounded" to='/dashboard/myorders'>My Orders</Link>
                                </li>
                            </>
                                : ""

                        }
                        {
                            !userData && <li><Link className="me-2 p-1 rounded" to='/dashboard/myorders'>My Orders</Link>
                            </li>
                        }

                    </ul>
                    {/* {userInfo?.role} */}

                </Col>

                <Col xs={9}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;