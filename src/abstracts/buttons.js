import styled from 'styled-components';
import { colorPrimary, colorSecondary, colorWhite } from './variables';

export const BaseButton = styled.button`
  padding: 1.5rem 2rem;
  border: none;
  cursor: pointer;
  text-align: center;
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background: #F3BA00;
  border-radius: 0px .4rem .4rem 0px;
  color: #FFFFFF;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: .5rem 1.5rem;
`
export const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${colorPrimary};
  border-radius:.4rem;
  color: ${colorWhite};
  font-size: 1.2rem;
  line-height: 2rem;
  padding: .5rem 0;
  width: 100%;
`
