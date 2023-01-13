import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'smartPhones',
        name: 'Smart Phones'
    },
    {
        id: 'tablets',
        name: 'Tablets'
    },
    {
        id: 'fetcherPhones',
        name: 'Fetcher Phones'
    }
]

const Categories = () => {
    return (
        <div className='d-flex flex-sm-row flex-column justify-content-around m-3'>
            {
                categories.map(ph => <div>
                    <Card className="text-center m-2" style={{ width: '19rem' }}
                        key={ph.id}
                    >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>{ph.name}</Card.Title>

                            <Link to={`/categories/${ph.id}`}><Button variant="primary">See {ph.name}</Button></Link>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default Categories;