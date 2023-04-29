import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../Pags/NewsCart/NewsCart';

const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div className='mt-4'>
            {
                categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Category;