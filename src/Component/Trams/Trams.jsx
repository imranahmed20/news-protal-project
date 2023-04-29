import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div className='container'>
            <h2>See more tram and condition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatem consequatur suscipit accusantium, ut fugiat saepe a! Porro, aliquid et.</p>
            <p>Go to <Link to='/register'>Register</Link></p>

        </div>
    );
};

export default Trams;