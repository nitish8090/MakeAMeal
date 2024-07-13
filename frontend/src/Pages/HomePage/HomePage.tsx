import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap';
import MealImage from '../../assets/meal-icon.png'

function HomePage() {
    return (
        <>
            <div>
                Is is cooking time yet?
                <Col xs={6} md={4}>
                    <Image src={MealImage} roundedCircle />
                </Col>
            </div>
            <div className="recepie-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Recipe</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </>

    )
}

export default HomePage