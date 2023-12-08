import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ParkingCard from '../components/ParkingCard';
import PlusCard from '../components/PlusCard';

import { getParkings, createParking } from '../api/parkingService';
import { getUser } from '../utils/storageUtils';
import { Container, Form, Input, Button } from '../components/styled/FormStyles';


const ParkingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Parking = () => {
  const [parkings, setParkings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newParking, setNewParking] = useState({
    name: '',
    location: '',
    totalSlots: 0
  });

  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (user) {
      getParkings().then(response => {
        setParkings(response.data);
      }).catch(error => console.error(error));
    }
  }, []);

  const handleCardClick = (parkingId) => {
    navigate(`/parking/manage/${parkingId}`);
  };

  const handlePlusClick = () => {
    setShowForm(showForm => !showForm);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = getUser();
    if (user) {
      createParking(newParking)
        .then(response => {
          setParkings([...parkings, response.data]);
          setShowForm(false); // Hide the form after successful creation
          // Reset the form
          setNewParking({ name: '', location: '', totalSlots: 0 });
        })
        .catch(error => console.error(error));
    }
  };

  const handleFormChange = (e) => {
    setNewParking({ ...newParking, [e.target.name]: e.target.value });
  };

  return (
    <ParkingContainer>
      {user ? (
        <>
          {parkings.map(parking => (
            <ParkingCard key={parking._id} parking={parking} onClick={() => handleCardClick(parking._id)} />
          ))}
          <PlusCard onClick={handlePlusClick} />

          {showForm && (
            <Container>
              <Form onSubmit={handleFormSubmit}>
                <Input name="name" value={newParking.name} onChange={handleFormChange} placeholder="Parking Name" required />
                <Input name="location" value={newParking.location} onChange={handleFormChange} placeholder="Location" required />
                <Button type="submit">Create Parking</Button>
              </Form>
            </Container>
          )}
        </>
      ) : (
        <h1>You are not logged in</h1>
      )}

    </ParkingContainer>
  );
};

export default Parking;
