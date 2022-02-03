import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Input valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required for contact form.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        if (!errorMessage) {

            alert('Form submitted. Thank you!');
        }
        // to complete with back-end development
    }

    return (
        <section>
            <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Enter name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" name="message" defaultValue={message} onBlur={handleChange} placeholder="Enter message"></Form.Control>
                </Form.Group>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </Form>
            </div>
            <div>
                <p>PHONE | 316.737.6852</p>
                <p>EMAIL | kngurley25@gmail.com</p>
            </div>
        </section>
    )
}

export default ContactForm;