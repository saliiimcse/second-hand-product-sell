import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const AllBuyers = () => {
    const allbuyersData = useLoaderData();
    // console.log(allbuyersData);

    const navigate = useNavigate();

    const deleteBuyer = (id) => {
        fetch(`https://server-side-12.vercel.app/buyer/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Delete successfully");


                    navigate('/dashboard');
                }
            })
    }

    return (
        <div>
            <div className='my-order'>

                {
                    allbuyersData?.map(p => <div
                        key={p._id}
                        className="my-2"
                    >
                        <Card border="danger" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>
                                    email: {p.email}
                                </Card.Text>

                                <Button onClick={() => deleteBuyer(p._id)} className='mx-2'>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllBuyers;