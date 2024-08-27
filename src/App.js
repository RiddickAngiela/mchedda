import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { TextField, Button, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [accountReference, setAccountReference] = useState(''); // State for accountReference
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/mpesa/stkpush', {
        phoneNumber,
        amount,
        accountReference
      });
      
      if (response.data && response.data.success) {
        setMessage('STK Push initiated successfully. Please check your phone.');
      } else {
        setMessage('Failed to initiate STK Push. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to initiate STK Push. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={4} style={styles.paper}>
            <Typography variant="h5" gutterBottom style={styles.title}>
              Mpesa Payment System
            </Typography>
            <Form onSubmit={handlePayment}>
              <Form.Group controlId="phoneNumber" className="mb-3">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                  style={styles.input}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="amount" className="mb-3">
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  style={styles.input}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="accountReference" className="mb-4">
                <TextField
                  label="Account Reference"
                  variant="outlined"
                  fullWidth
                  required
                  style={styles.input}
                  value={accountReference}
                  onChange={(e) => setAccountReference(e.target.value)}
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={styles.button}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </Button>
              </div>
              {message && <Typography variant="body1" color="textSecondary" style={{ marginTop: '1rem' }}>{message}</Typography>}
            </Form>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  paper: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    maxWidth: '100%',
    textAlign: 'center'
  },
  title: {
    marginBottom: '1.5rem',
    color: '#3f51b5',
  },
  input: {
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#00E676',
    borderRadius: '8px',
    padding: '0.8rem',
  }
};

export default Home;
