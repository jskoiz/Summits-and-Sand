import React from 'react';
import { AppBar, Toolbar, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../assets/images/logo.png';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '360px',
  padding: theme.spacing(0, 0),
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '0.1rem solid rgba(0, 0, 0, 0.08)',
  
}));

const AnnouncementBar = styled('div')(({ theme }) => ({
  height: '40px',
  backgroundColor: '#b2d6ec',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
}));

const StyledLogo = styled('img')(({ theme }) => ({
  height: '200px',
  padding: theme.spacing(2, 0),
}));
const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
  }));

function Header() {
  return (
    <StyledAppBar position="static" color="default">
      <AnnouncementBar>
      <Typography
          variant="body2"
          align="center"
          color="white"
          sx={{
            fontSize: {
              xs: '0.7rem',
              sm: '0.8rem',
              md: '1rem',
            },
          }}
        >
          Pre-Order the Summits & Sand Coloring Book Today!
        </Typography>
      </AnnouncementBar>
      <StyledToolbar>
        <StyledLogo src={logo} alt="Logo" />
        <Grid container justifyContent="center" spacing={2}>
  <Grid item>
    <StyledButton component={Link} to="/" color="inherit">
      Home
    </StyledButton>
  </Grid>
  <Grid item>
    <StyledButton component={Link} to="/shop" color="inherit">
      Shop
    </StyledButton>
  </Grid>
  <Grid item>
    <StyledButton component={Link} to="/characters" color="inherit">
      Characters
    </StyledButton>
  </Grid>
  <Grid item>
    <StyledButton component={Link} to="/contact" color="inherit">
      Contact
    </StyledButton>
  </Grid>
</Grid>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
