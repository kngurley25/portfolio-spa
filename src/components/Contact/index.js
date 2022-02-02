import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        alert('Form submitted. Thank you!');
        // to complete with back-end development
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={name} onChange={handleChange} placeholder="Enter name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={email} onChange={handleChange} placeholder="Enter email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" name="message" defaultValue={message} onChange={handleChange} placeholder="Enter message"></Form.Control>
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </section>
    )
}

export default ContactForm;