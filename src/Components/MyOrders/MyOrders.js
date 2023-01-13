import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from '../Context/Context';
import './MyOrders.css';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-side-12.vercel.app/orders?email=${user?.email}`);
                const jsonData = await response.json();
                setOrders(jsonData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [orders]);
    return (
        <div>
            <>
                {
                    loading && <p>loading...</p>
                }
                <div className='my-order'>

                    {
                        orders?.map(p => <div
                            key={p._id}
                            className="my-2"
                        >
                            <Card border="danger" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{p.productName}</Card.Title>
                                    <Card.Text>
                                        Sell Price: {p.sellPrice}
                                    </Card.Text>

                                    <Card.Text>
                                        Meet Location: {p.Location}
                                    </Card.Text>

                                    <Card.Text>
                                        Phone Number: {p.phoneNumber}
                                    </Card.Text>
                                    {/* <Button className='mx-2'>Delete</Button> */}
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            </>
        </div>
    );
};

export default MyOrders;