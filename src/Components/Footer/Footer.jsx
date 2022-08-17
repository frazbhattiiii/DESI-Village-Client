import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/system'
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
    const FooterButton = styled(Button)({
    backgroundColor: '#1AC073',
    '&:hover': {
      backgroundColor: '#1ACC00'
    }
  })
  return (
    <Box sx={{
      padding: '4rem 0',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}>
          <Box>
              <Typography sx={{
                fontSize: '2rem',
                fontStyle: 'italic',
                fontWeight: 'bolds'
              }}>Do you want to become a seller?</Typography>
              <Typography sx={{
                fontStyle: 'italic',
                margin: '2rem 0'
              }}>Click this button to become a seller
                  <br/>
                  and start your career right away.
              </Typography>
              <FooterButton variant='contained' onClick={()=>navigate('/vendor')}>Become a Seller</FooterButton>
          </Box>
          <Box sx={{
            marginTop: {
              xs: '2rem',
              md: '0'
            },
            width: {
              xs: '350px',
              md: '450px'
            },
            height: {
              xs: '300px',
              md: '400px'
            }
          }}>
              <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }} src="/images/footer.png" alt="" />
          </Box>
      </Box>
    </Box>
  )
}

export default Footer