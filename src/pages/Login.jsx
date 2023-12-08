import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../api/userService';
import { saveUser } from '../utils/storageUtils';
import { Container, Title, Form, Input, Button, StyledLink, Message } from '../components/styled/FormStyles';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      saveUser(data);
      console.log('Login Successful', data);
      navigate('/');
    } catch (error) {
      console.error('An error occurred during login', error.response.data);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <Button type="submit">Login</Button>
      </Form>
      <Message>
        Don't have an account? <StyledLink to="/register">Register here</StyledLink>
      </Message>
    </Container>
  );
};

export default Login;
