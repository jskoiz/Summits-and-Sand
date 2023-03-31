import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const FooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: '#f5d600',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(30),
}));

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Summits & Sand</Typography>
            <Typography variant="body2">
              Coloring books offering unique and thoughtful designs inspired by taking care of our environment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
  <Typography variant="h6">Links</Typography>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li>
      <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>Search</Link>
    </li>
    <li>
      <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link>
    </li>
    <li>
      <Link to="/characters" style={{ textDecoration: 'none', color: 'inherit' }}>Characters</Link>
    </li>
    <li>
      <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>
    </li>
  </ul>
</Grid>
<Grid item xs={12} sm={4}>
            <Typography variant="h6">Wholesale Inquiries</Typography>
            <Typography variant="body2">
            If you're interested in becoming a wholesale partner, you can submit your inquiry using our Contact form.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;