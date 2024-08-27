import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { TextField, Button, Paper, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Paper elevation={3} style={{ padding: '2rem', borderRadius: '15px' }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#3f51b5' }}>
              Mpesa Payment System
            </Typography>
            <Form>
              <Form.Group controlId="phoneNumber" className="mb-4">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Form.Group>
              <Form.Group controlId="amount" className="mb-4">
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ borderRadius: '20px', backgroundColor: '#00E676' }}
                >
                  Pay Now
                </Button>
              </div>
            </Form>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
