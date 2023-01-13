import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);

    const [products, setProducts] = useState([]);



    const navigate = useNavigate();


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-side-12.vercel.app/products?email=${user?.email}`);
                const jsonData = await response.json();
                setProducts(jsonData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [user]);



    const adverties = (id) => {
        fetch(`https://server-side-12.vercel.app/products/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(true)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // toast("Product added successfully");
                    console.log('adverties');
                    navigate('/')
                    // navigate('/dashboard/myproducts');
                }
            })
    }

    const deleteOrder = (id) => {
        fetch(`https://server-side-12.vercel.app/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Product added successfully");

                    navigate('/')
                    // navigate('/dashboard/myproducts');
                }
            })
    }

    return (
        <>
            {
                loading && <p>loading...</p>
            }
            <h1 className='text-center'>My Products</h1>
            <div className='my-order'>

                {
                    products?.map(p => <div
                        key={p._id}
                        className='m-2'
                    >

                        <Card border="danger" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{p.productName}</Card.Title>
                                <Card.Text>
                                    Sell Price: {p.sellPrice}
                                </Card.Text>

                                <Card.Text>
                                    Categories: {p.categories}
                                </Card.Text>

                                <Card.Text>
                                    Product : {p.available == true ? 'unsold' : 'sold'}
                                </Card.Text>

                                <Button onClick={() => deleteOrder(p._id)} className='mx-2'>Delete</Button>
                                <Button onClick={() => adverties(p._id)}>Advertise</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
                <ToastContainer />
            </div>
        </>
    );
};

export default MyProducts;