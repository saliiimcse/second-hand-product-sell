import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Adverties = () => {

    const [advertiesData, setAdvertiesData] = useState([]);

    useEffect(() => {
        fetch(`https://server-side-12.vercel.app/advertise`, {
            method: 'GET',


        })
            .then(res => res.json())
            .then(data => {

                // toast("Product added successfully");
                setAdvertiesData(data);
                // navigate('/dashboard/myproducts');

            })
    }, [])
    return (
        <>
            {
                advertiesData?.length > 0 && <div className='container my-order'>
                    {
                        advertiesData?.map(p => <div
                            key={p._id}
                            className="m-2"
                        >
                            <Card border="danger" style={{ width: '18rem' }}>
                                <Card.Img className='img-fluid img-thumbnail' variant="top" src={p.image} style={{ height: '18rem' }} />
                                <Card.Body>
                                    <Card.Title>{p.productName}

                                    </Card.Title>
                                    <Card.Text>
                                        Sell Price: {p.sellPrice}
                                    </Card.Text>

                                    <Card.Text>
                                        Purchase Price: {p.purchasePrice}
                                    </Card.Text>

                                    <Card.Text>
                                        Mobile Number: {p.mobileNumber}
                                    </Card.Text>

                                    <Card.Text>
                                        Location: {p.location}
                                    </Card.Text>

                                    <Card.Text>
                                        Purchase of year: {p.purchaseYear}
                                    </Card.Text>

                                    <Card.Text>
                                        Year of use: {p.yearofUse}
                                    </Card.Text>

                                    <Card.Text>
                                        Description: {p.description}
                                    </Card.Text>

                                    <Card.Text>
                                        Post Time: {p.createAt}
                                    </Card.Text>

                                    <Card.Text>
                                        Seller Name: {p.sellerName}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            }
        </>
    );
};

export default Adverties;