import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
<<<<<<< HEAD


const Course = (props) => {

    const handleClick = () => {
        const details={
            id: props.id,
            name: props.title,
            author: props.author,
            price: props.price,
            description: props.description,
            img: props.img,
            categories: props.categories
        }
        // Storing data in sessionStorage
        sessionStorage.setItem('coursePreviewDetails', JSON.stringify(details));
=======
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/CoursePreviewSlice';


const Course = (props) => {
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(addItem({
            name: props.title,
            author: props.author,
            price: props.price,
            desc: props.desc,
            url: props.url,
            img: props.img
        }))
>>>>>>> origin/master
    }

    return (
        <>
            <div className="Course">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className='my-1'>{props.author}</Card.Text>
<<<<<<< HEAD
                        <Card.Text className='my-1'>{props.categories}</Card.Text>
                        <Card.Text>₹{props.price}</Card.Text>
                        <Link to="/coursepreview" ><Button onClick={handleClick} >More details</Button> </Link>
=======
                        <Card.Text>₹{props.price}</Card.Text>
                        <Link to="/coursepreview" ><Button onClick={handleClick} variant="outline-success">More details</Button> </Link>
>>>>>>> origin/master
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Course