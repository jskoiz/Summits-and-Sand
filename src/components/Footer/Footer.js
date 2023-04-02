import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import CustomComponents from "../../styles/customStyles";
import avmil from "../../assets/images/avmil.png";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "#f5d600",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  lineHeight: "2",
}));
const LegalLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#141414",
  fontSize: "0.8rem",
  marginRight: theme.spacing(2),
}));

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h2">Summits & Sand</Typography>
            <Typography variant="body1">
              Coloring books offering unique and thoughtful designs inspired by
              taking care of our environment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h2">Links</Typography>

            <List
              sx={{
                "& .MuiTypography-root": {
                  lineHeight: 0.1,
                  marginBottom: 1.5,
                  padding: 0,
                },
              }}
            >
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
          <Grid item xs={12}>
            <Box
              sx={{
                borderTop: "1px solid #333",
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                component="section"
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ marginRight: 2 }}>
                  © 2023, Summits & Sand
                </Typography>
                <Typography>
                  <LegalLink to="/refund-policy">Refund policy</LegalLink>
                  <LegalLink to="/privacy-policy">Privacy policy</LegalLink>
                  <LegalLink to="/terms-of-service">Terms of service</LegalLink>
                  <LegalLink to="/contact-information">
                    Contact information
                  </LegalLink>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
