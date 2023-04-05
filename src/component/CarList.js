import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

import styled from 'styled-components';

const CarListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarListTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

const CarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ isHighlighted }) => isHighlighted ? 'yellow' : '#f5f5f5'};
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;

  & > span {
    margin-right: 10px;
    font-weight: ${({ isHighlighted }) => isHighlighted ? 'bold' : 'normal'};
  }

  & > button {
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const CarList = () => {
  const { cars, name } = useSelector(({ formInputs, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
      cars: filteredCars,
      name: formInputs.name.toLowerCase()
    }
  });

  const totalCost = cars.reduce((acc, car) => acc + parseInt(car.cost),0);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeCar(id));
  }

  return (
    <>
      <CarListContainer>   
        <CarListTitle>Cars List</CarListTitle>
        {
          cars.map((car) => {
          return ( 
          <CarRow key={car.id} isHighlighted={name && car.name.toLowerCase().includes(name)}>
            <span>{car.name}</span> 
            <span>{car.cost}</span>
            <button onClick={() => handleDelete(car.id) }>Delete</button>
          </CarRow>
          )
        })}
      </CarListContainer>
      <h2>Total cost: {totalCost}</h2>
    </>
  )
}

export default CarList