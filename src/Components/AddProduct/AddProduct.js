import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AuthContext } from '../Context/Context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);
    const [products, setProducts] = useState({});

    console.log(products);


    const handleFrom = (event) => {
        event.preventDefault();
        fetch('https://server-side-12.vercel.app/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Product added successfully");
                    event.target.reset();
                    navigate('/dashboard/myproducts');
                }
            })
    }

    const handleInputBlur = event => {
        const form = event.target;
        const field = form.name;
        const value = form.value;
        const newProducts = { ...products };
        const postTime = new Date().toLocaleDateString();
        newProducts[field] = value;
        const updateProducts = { ...newProducts, email: user?.email, sellerName: user?.displayName, createAt: postTime, advertise: false, available: true }
        setProducts(updateProducts);



    }
    useEffect(() => {
        // setProducts(userInfo)
    }, [])
    return (
        <div>
            {
                loading && <p>loading...</p>
            }
            <div className='container added-products mb-4'>
                <h1 className='text-center'>Add Product</h1>
                <Form onSubmit={handleFrom}>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='productName' type="text" placeholder="Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="purchasePrice">
                        <Form.Label>Purchase price</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='purchasePrice' type="number" placeholder="Add Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="conditionType">
                        <Form.Label>Condition Type</Form.Label>
                        <Form.Select onBlur={handleInputBlur} defaultValue="" name='conditionType' required>
                            <option value={'excellent'}>excellent</option>
                            <option value={'good'}>good</option>
                            <option value={'fair'}>fair</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='mobileNumber' type="number" placeholder="Mobile Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='location' type="text" placeholder="add location" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="categories">
                        <Form.Label>Product Categories</Form.Label>
                        <Form.Select onBlur={handleInputBlur} defaultValue="" name='categories' required>
                            <option value={'smartPhones'}>Smart Phones</option>
                            <option value={'tablets'}>Tablets</option>
                            <option value={'fetcherPhones'}>Fetcher Phones</option>
                        </Form.Select>
                    </Form.Group>

                    <FloatingLabel className="mb-3" controlId="description" label="Description">
                        <Form.Control onChange={handleInputBlur}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            name='description'

                            required
                        />
                    </FloatingLabel>

                    <Form.Group className="mb-3" controlId="sellPrice">
                        <Form.Label>Sell price</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='sellPrice' type="number" placeholder="sell Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="purchaseYear">
                        <Form.Label>Purchase Year</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='purchaseYear' type="calender" placeholder="Purchase Year" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yearofUse">
                        <Form.Label>Year of user</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='yearofUse' type="calender" placeholder="Year of use" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control onBlur={handleInputBlur} name='image' type="text" placeholder="Add Image URL" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;