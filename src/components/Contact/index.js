import React from 'react';
import Form from 'react-bootstrap/Form';

function ContactForm() {
    return (
        <section>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" type="text" name="message" placeholder="Enter message"></Form.Control>
                </Form.Group>
            </Form>
        </section>
    )
}

export default ContactForm;