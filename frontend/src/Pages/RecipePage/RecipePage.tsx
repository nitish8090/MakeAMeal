import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MealIcon from '../../assets/meal-icon.png'
import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Recipe from '../../interfaces/Recipe.interface';

function RecipePage() {

  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    name: ''
  });

  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`http://localhost:8000/recipe-book/recipe/${params.id}/`).then(
      response => {
        setRecipe(response.data)
      }
    ).catch(error => {
      console.log(error)
    })
  }, [params])


  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className='p-4 display-4'>{recipe.name}</div>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <div className='p-4'>
              <Card>
                <Card.Img src={`${import.meta.env.VITE_STATIC_IMAGE_URL}/${recipe.cover}`}></Card.Img>
              </Card>
            </div>
          </Col>
          <Col lg={7}>
            {page === 1 ? (
              <div className='p-4'>
                <h1>Ingredients</h1>
                <ListGroup className='p-2'>
                  {recipe.ingredients && recipe.ingredients.map(i => (
                    <ListGroup.Item variant="secondary"> 
                      <Form.Check type={'checkbox'} label={i.name} />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className='d-flex justify-content-center'>
                  <Button onClick={() => { setPage(2) }}>I've collected all Ingredients</Button>
                </div>
              </div>
            ) : (
              <div className='p-4'>
                <h1>Cooking Steps</h1>
                <ListGroup className='p-2'>
                  {recipe.cooking_steps && recipe.cooking_steps.map(step => (
                    <>
                      <ListGroup.Item
                      variant="secondary"
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Step {step.step_no}</div>
                          {step.step}
                        </div>
                      </ListGroup.Item>
                    </>
                  ))}
                </ListGroup>
                <div className='d-flex justify-content-center'>
                  <Button onClick={() => { setPage(1) }}>Go back</Button>
                </div>
              </div>
            )}

          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={5} className='p-4'>
            <h2>Add a Comment</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={7} className='p-4'>
            <h2>Comments</h2>
            {recipe.comments && recipe.comments.map(comment => (
              <Card>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{comment.user}</Card.Subtitle>
                  <Card.Text>
                    {comment.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RecipePage