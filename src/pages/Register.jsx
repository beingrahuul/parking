import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/userService';
import { saveUser } from '../utils/storageUtils';

import { Container, Title, Form, Input, Button, StyledLink, Message } from '../components/styled/FormStyles';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(formData);
      saveUser(data);
      console.log('Registration Successful', data);
      navigate('/');
    } catch (error) {
      console.error('An error occurred during registration', error.response.data);
    }
  };

  return (
    <Container>
    <Title>Register</Title>
    <Form onSubmit={onSubmit}>
      <Input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <Button type="submit">Register</Button>
    </Form>
    <Message>
      Already have an account? <StyledLink to="/login">Login here</StyledLink>
    </Message>
  </Container>

  );
};

export default Registration;
