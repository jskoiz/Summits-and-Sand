import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import CustomComponents from "../styles/customStyles";
import avmil from "../assets/images/avmil.png";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "#f5d600",
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(5),
  lineHeight: "2",
}));
const LegalLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#141414",
  fontSize: "0.8rem",
  marginRight: theme.spacing(2),
}));
const EmailSubscriptionSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#b2d6ec",
  padding: theme.spacing(4),
  color: "#ffffff",
}));

const EmailInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff",
    },
  },
  "& .MuiInputBase-input": {
    color: "#ffffff",
  },
}));

function Footer() {
  return (
    <FooterWrapper>
      <EmailSubscriptionSection
        spacing={2}
        sx={(theme) => ({
          minHeight: "50px",
          padding: theme.spacing(10, 2), // Use 2 instead of 10 for side padding on mobile
          [theme.breakpoints.up("sm")]: {
            // Add this block for larger screens
            padding: theme.spacing(10, 10),
          },
        })}
      >
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Subscribe to our emails
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Be the first to know about new collections and exclusive offers.
          </Typography>
          <Box display="flex" justifyContent="center">
            <EmailInput
              placeholder="Email"
              variant="outlined"
              size="small"
              sx={{ width: { xs: "100%", sm: "50%" } }}
            />
          </Box>
        </Container>
      </EmailSubscriptionSection>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          sx={(theme) => ({
            minHeight: "50px",
            padding: theme.spacing(10, 2), // Use 2 instead of 10 for side padding on mobile
            [theme.breakpoints.up("sm")]: {
              // Add this block for larger screens
              padding: theme.spacing(10, 10),
            },
          })}
        >
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
              <ListItem component={Link} to="/shop">
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem component={Link} to="/characters">
                <ListItemText primary="Characters" />
              </ListItem>
              <ListItem component={Link} to="/contact">
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
