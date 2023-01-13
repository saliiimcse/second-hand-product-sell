import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserInfoContext } from '../Context/UserContext';

const Category = () => {
    const { user } = useContext(AuthContext);

    const { userInfo } = useContext(UserInfoContext);


    console.log(userInfo);

    const phonesData = useLoaderData();

    // const [modalShow, setModalShow] = useState(false);

    const [order, setOrder] = useState();
    // console.log(order);

    // modal
    const [show, setShow] = useState(false);

    const [storeProduct, setStroeProcuct] = useState({});


    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setStroeProcuct(product);
        setShow(true)
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('event', order);
        try {
            fetch('https://server-side-12.vercel.app/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        // alert('item is booked')
                        toast("The item is booked 😀");
                        event.target.reset();
                    }
                })
        } catch (error) {
            console.error(error);
            toast.error("Some thing is wrong 😡");
        }


    }


    const handleInputBlur = event => {
        event.preventDefault();
        const form = event.target;
        const field = form.name;
        const value = form.value;
        const newProducts = { ...order };
        newProducts[field] = value;
        const updateProducts = {
            ...newProducts,
            email: user?.email,
            buyerName: user?.displayName,
            productName: storeProduct?.productName,
            id: storeProduct?._id,
            sellPrice: storeProduct?.sellPrice
        }
        setOrder(updateProducts);




    }



    return (
        <div className='container my-order'>

            {
                phonesData?.map(p => <div
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

                            <Button className='mx-2' onClick={() => handleShow(p)}>Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={user?.displayName}
                                disabled

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={user?.email}
                                disabled

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={storeProduct.productName}
                                disabled

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item price</Form.Label>
                            <Form.Control
                                type="text"
                                value={storeProduct.sellPrice}
                                disabled

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Phone Number</Form.Label>
                            <Form.Control
                                onBlur={handleInputBlur}
                                name="phoneNumber"
                                type="number"
                                placeholder="Phone Number"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your Location</Form.Label>
                            <Form.Control name='Location' onBlur={handleInputBlur} />
                        </Form.Group>

                        <Button type='submit' variant="primary" onClick={handleClose}>
                            Submit
                        </Button>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default Category;