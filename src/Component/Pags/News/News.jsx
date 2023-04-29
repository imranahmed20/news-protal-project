import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInsights from './EditorInsights/EditorInsights';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, thumbnail_url, image_url, author, rating, total_view, category_id } = news;
    return (
        <div className='mt-3'>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>  <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News In the categories</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;