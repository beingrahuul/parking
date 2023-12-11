import React, { useState, useEffect } from 'react';
import { getParkingSlots, getParkingSlotDetails } from '../api/parkingService';
import { getUser } from '../utils/storageUtils';
import { useNavigate } from 'react-router-dom';
import { useDispatchCart } from '../context/CartContext';
import { useCart } from '../context/CartContext';


import {
  BookingContainer,
  SectionTitle,
  VehicleOptions,
  VehicleOption,
  ParkingSpots,
  ParkingSpot,
  TotalPrice,
  BookButton
} from '../components/styled/BookingStyles';
import { useParams } from 'react-router-dom';

const vehicleTypes = ['Bike', 'Sedan', 'Truck', 'Pickup']; // Add more vehicle types as necessary

function ManageParking() {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const [slots, setSlots] = useState([]);
  const [slotsDetails, setSlotsDetails] = useState({});

  const {id} = useParams();
  const { items } = useCart();
  const isInCart = (id) =>{
    console.log(items);
    if(items.find(item => item.id === id)){
      return true;
    }
  };

  const dispatch = useDispatchCart();


  useEffect(() => {
  
    const user = getUser();

    if (user) {
      getParkingSlots(id).then(response => {
        const parkingInfo = response.data;
        setSlots(parkingInfo.slots);

        parkingInfo.slots.forEach(slotId => {
          getParkingSlotDetails(slotId).then(slotResponse => {
            setSlotsDetails(prev => ({ ...prev, [slotId]: slotResponse.data }));
          });
        });
      }).catch(error => console.error(error));
    }
  }, []);

  const handleVehicleSelect = (type) => {
    setSelectedVehicle(type);
  };

  const handleSpotSelect = (spot) => {
    setSelectedSpot(spot);
    if (selectedSpot === spot) {
      setSelectedSpot(null);
    }
  };

  const handleBooking = () => {
    if (selectedVehicle && selectedSpot) {
      const item = {
        id: selectedSpot,
        slotNumber: slotsDetails[selectedSpot].spotNumber, 
        parkingID: id,
        type: selectedVehicle,
        price: 150 // Implement this function based on your pricing
      };
      dispatch({ type: 'ADD_ITEM', payload: item });
      navigate('/payment');
    }else{
      alert("Please select a vehicle and a parking spot")
    }
  };

  

  return (
    <BookingContainer>
      <SectionTitle>Choose a vehicle</SectionTitle>
      <VehicleOptions>
        {vehicleTypes.map(type => (
          <VehicleOption key={type} onClick={() => handleVehicleSelect(type)} selected={selectedVehicle === type}>
            {type}
          </VehicleOption>
        ))}
      </VehicleOptions>

      <SectionTitle>Choose a parking spot</SectionTitle>
      <ParkingSpots>
        {slots.length > 0 && slots.map(slotId => {
          const slot = slotsDetails[slotId];
          if (slot) {
            return (
              <ParkingSpot
                key={slotId}
                onClick={() => !slot.isOccupied && !isInCart(slotId) && handleSpotSelect(slotId)}
                style={{ backgroundColor: isInCart(slotId) ? 'yellow' : slot.isOccupied ? 'red' : "none" }}
                selected={selectedSpot === slotId}
              >
                {slot.spotNumber}
              </ParkingSpot>
            );
          }
          return null;
        })}
      </ParkingSpots>

      <TotalPrice>Total Price: {!selectedSpot ? "Rs 0.00" : `Rs 150.00`}</TotalPrice> 
      <BookButton onClick={handleBooking}>Book Place</BookButton>
    </BookingContainer>
  );
}

export default ManageParking