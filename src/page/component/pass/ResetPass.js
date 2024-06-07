import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Rest = ({ handleOnchange, email, formswitcher, handleResetSubmit }) => {
    return (
        <div>
            <Container className="bg-light p-5">
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Reset Password</h1>
                        <hr />
                        <Form onSubmit={handleResetSubmit}> {/* Add onSubmit to the Form */}
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

                            <br />
                            <Button type="submit">Reset Password</Button>
                        </Form>
                        <Row>
                            <Col>
                                <a href="#!" onClick={() => formswitcher('login')}> Go Back </a>

                            </Col>
                        </Row>

                    </Col>
                </Row>


            </Container>
        </div>
    );
};


