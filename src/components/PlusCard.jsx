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
  font-size: 40px;
`;

const PlusCard = ({ onClick }) => {
  return (
    <Card onClick={onClick}>
      <span>+</span>
    </Card>
  );
};

export default PlusCard;
