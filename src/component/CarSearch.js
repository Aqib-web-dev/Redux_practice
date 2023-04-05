import React from 'react'
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {changeSearchTerm } from '../store';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 0;
`;

const SearchLabel = styled.label`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 450px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 5px #0077cc;
  }
`;

const CarSearch = () => {
  const searchInput = useSelector((state) => state.cars.searchTerm);
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  }

  return (
    <SearchContainer>
      <SearchLabel>Search</SearchLabel>
        <SearchInput 
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="search a car"
        />
    </SearchContainer>
  )
}

export default CarSearch