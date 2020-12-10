import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import {Row, Col} from 'react-bootstrap';
import Login from './Login';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container ml-3'>
      <Row className="landing pt-5">
      <Col sm={6} md={6} xs={12}>
          <img className='form-img img-fluid' src='./imgs/inscrit.png' alt='spaceship' />
      </Col>
      <Col sm={6} md={6} xs={12}>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
       </Col>
</Row>
       <Row className="landing  pt-5">
      <Col sm={6} md={6} xs={12}>
          <img className='form-img img-fluid' src='./imgs/signIn.png' alt='spaceship' />
      </Col>
      <Col sm={6} md={6} xs={12}>
          <Login/>
       </Col>
      </Row>
      </div>
    
    </>
  );
};

export default Form;