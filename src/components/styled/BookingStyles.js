import styled from 'styled-components';

export const BookingContainer = styled.div`
  background: #f7f7f7;
  padding: 20px;
  height: 100%;
  overflow: scroll;
`;

export const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const VehicleOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const VehicleOption = styled.button`
  background: ${props => props.selected ? '#d1ffbd' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  flex-grow: 1;
  margin: 0 5px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;

export const ParkingSpots = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  color: black;
`;

export const ParkingSpot = styled.div`
  background: ${props => props.selected ? '#d1ffbd' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 30px; // Adjust the width as necessary
  margin: 1%;
  text-align: center;
  cursor: pointer;
`;

export const TimeSlotOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TimeSlot = styled.div`
  background: ${props => props.selected ? '#d1ffbd' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 48%; // Adjust the width as necessary
  margin: 1%;
  text-align: center;
  cursor: pointer;
  color: black;

`;

export const TotalPrice = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BookButton = styled.button`
  background-color: #28a745;
  margin: 0 auto;
  color: white;
  width: 200px;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
`;
