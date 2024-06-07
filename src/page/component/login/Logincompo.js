import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnchange, email, formswitcher, password, handleSubmit }) => {
  return (
    <div>
      <Container className="bg-light p-5">
        <Row>
          <Col>
            <h1 className="text-info text-center">CLIENT LOGIN</h1>
            <hr />
            <Form onSubmit={handleSubmit}> {/* Add onSubmit to the Form */}
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnchange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnchange}
                  placeholder="password"
                  required
                />
              </Form.Group>
              <br />
              <Button type="submit" >Login</Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" onClick={() => formswitcher('reset')}>Forget password</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


