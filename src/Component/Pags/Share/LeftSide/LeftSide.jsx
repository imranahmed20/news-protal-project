import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='mt-5'>
            <h4>All Categories</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none fs-5 fw-semibold text-dark'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;