import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  
  h3{
    margin: 0;
    font-size: 18px;
  }

  p{
    margin: 0;
    font-size: 12px;
  }
`;

const ParkingCard = ({ parking, onClick }) => {
  return (
    <Card onClick={onClick}>
      <h3>{parking.name}</h3>
      <p>{parking.location}</p>
      <p>Total Spaces: {parking.totalSlots}</p>
    </Card>
  );
};

export default ParkingCard;
