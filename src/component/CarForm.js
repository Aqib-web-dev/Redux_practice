import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {changeName, changeCost, addCar } from '../store';

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const CarForm = () => {
  const {name, cost} = useSelector((state) => state.formInputs);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    let value = e.target.value;
    dispatch(changeName(value));
  };

  const handleCostChange = (e) => {
    let value = e.target.value;
    dispatch(changeCost(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({id: Math.random(), name, cost}));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder='Car name'
          value={name}
          onChange={handleNameChange}
        />
        <Input 
          type='number'
          placeholder="cost"
          value={cost || ''}  
          onChange={handleCostChange}   
        />
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
};

export default CarForm;
