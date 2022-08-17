import {styled} from '@mui/system';
import { Button } from '@mui/material';

import React from 'react'

const StyledButton = styled(Button)`
  background-color: #1AC073;
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color: #1AC078;
  }
  &:focus {
    background-color: green;
  }
`;
const GreenButton = (props) => {
  return (
    <StyledButton 
    size="large"
    type="submit"
    variant="contained"
    disabled={props.disabled}
    loading={props.loading.toString()}>
    {props.text}
    </StyledButton>
    
  )
}

export default GreenButton