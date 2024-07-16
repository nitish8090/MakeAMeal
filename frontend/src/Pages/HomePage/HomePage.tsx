import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import MealImage from '../../assets/meal-icon.png'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Recipe from '../../interfaces/Recipe.interface';

import './HomePage.scss';

function HomePage() {

    const [recipes, setRecipes] = useState<Recipe[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/recipe-book/recipe/').then(
            response => {
                setRecipes(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <>
            <Container fluid className='px-4 banner bg-secondary d-flex align-items-center'>
                <Row className=''>
                    <div className='display-1'>
                        Flavorful Journeys
                    </div>
                    <div className='display-3'>
                        Discover Authentic Asian Recipes Here!
                    </div>
                </Row>
            </Container>

            <div className="recipe-cards">
                <Container className='py-4'>
                    <Row className='p-4'>
                        {recipes.map(recipe => (
                            <Col lg={3}>
                                <Card className='recipe-card bg-primary' onClick={() => { navigate(`/${recipe.id}`) }}>
                                    <Card.Img className='recipe-image' variant="bottom" src={`${import.meta.env.VITE_STATIC_IMAGE_URL}/${recipe.cover}`} />
                                    <Card.Body>
                                        <Card.Title className='recipe-title'>{recipe.name}</Card.Title>
                                        <div className='d-flex justify-content-center'>
                                            <Button className='px-4' variant="secondary">View</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default HomePage