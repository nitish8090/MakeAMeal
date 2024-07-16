import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Recipe from '../../interfaces/Recipe.interface';

function RecipePage() {

  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    name: '',
    cover: '',
    ingredients: [],
    cooking_steps: [],
    comments: []
  });

  const [recipeComment, setRecipeComment] = useState({
    user: '',
    comment: ''
  })

  const [page, setPage] = useState(1);
  const [validated, setValidated] = useState(false);

  const submitComment = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return
    }

    setValidated(true);
    console.log(recipeComment)

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/recipe-book/recipe/${params.id}/comment/`, recipeComment).then(
      response => {
        const updateComments = [...recipe.comments, response.data]
        setRecipe({...recipe, comments: updateComments})
      }
    ).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/recipe-book/recipe/${params.id}/`).then(
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
      <Container fluid>
        <Row>
          <Col lg={5} className='p-4'>
            <Card bg="secondary w-100">
              <Card.Body>
                <h2>Add a Comment</h2>
                <Form noValidate validated={validated} onSubmit={submitComment}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      required
                      value={recipeComment.user}
                      onChange={e => { setRecipeComment({ ...recipeComment, user: e.target.value }) }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name or email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      value={recipeComment.comment}
                      onChange={e => { setRecipeComment({ ...recipeComment, comment: e.target.value }) }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a few words.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={7} className='p-4'>
            <h2>Comments</h2>
            {recipe.comments && recipe.comments.map(comment => (
              <Card className='my-2'>
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