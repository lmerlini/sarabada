import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

import Alert from '../components/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!email) {
      valid = false;
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      formErrors.email = "Email is invalid.";
    }

    if (!password) {
      valid = false;
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      valid = false;
      formErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Email:', email, 'Password:', password);
      //  chamada daAPI aqui flavin
    }
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col md={12}>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Login</h2>
              

                <FormGroup>
                  <Label for="email">Email</Label>
                    {errors.email && <Alert >{errors.email}</Alert>}
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    invalid={errors.email ? true : false}
                  />
                </FormGroup>
                
                {/* {errors.password && <Alert color="danger">{errors.password}</Alert>} 
                O component alert não ta funcionando mano criei 1 pra exemplio
                */}
                <FormGroup>
                  <Label for="password">Password</Label>
                  {errors.password && <Alert >{errors.password}</Alert> }
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    invalid={errors.password ? true : false}
                  />
                </FormGroup>
                
                <Button color="primary" block>
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
