import React from "react";
import { Container, Grid, Typography, List, ListItem, ListItemText} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import CustomComponents from "../../styles/customStyles";
import avmil from "../../assets/images/avmil.png";



const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "#f5d600",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(30),
  lineHeight: "2",
}));


function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
  
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h2">Summits & Sand</Typography>
            <Typography  variant="body1">

                Coloring books offering unique and thoughtful designs inspired
                by taking care of our environment.

            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h2">Links</Typography>

            <List sx={{ '& .MuiTypography-root': { lineHeight: 0.1, marginBottom: 1.5, padding: 0, } }}>
  <ListItem component={Link} to="/search">
    <ListItemText primary="Search" />
  </ListItem>
  <ListItem component={Link} to="/products">
    <ListItemText primary="Products" />
  </ListItem>
  <ListItem component={Link} to="/characters">
    <ListItemText primary="Characters" />
  </ListItem>
  <ListItem component={Link} to="/contact-us">
    <ListItemText primary="Contact Us" />
  </ListItem>
</List>

          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h2">Wholesale Inquiries</Typography>
            <Typography>
                If you're interested in becoming a wholesale partner, you can
                submit your inquiry using our Contact form.

            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
          <CustomComponents.FullWidthImage src={avmil} alt="AVMiL LABS" />

          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
