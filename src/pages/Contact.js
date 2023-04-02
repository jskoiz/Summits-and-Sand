import React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import patternBG from "../assets/images/bluepattern.jpg"; // Import the background image

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5d600",
  color: "white",
  width: 300,
  paddingTop: theme.spacing(1), // Increase this value for more top padding
  paddingBottom: theme.spacing(1), // Increase this value for more bottom padding
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const CenteredTextSection = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginLeft: "auto",
  marginRight: "auto",
}));

const FullWidthSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${patternBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
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
const TitleBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(3, 10, 3, 10),
  borderRadius: theme.spacing(1),
}));

// home.js
function Contact() {
  return (
    <Box sx={{ marginTop: 0 }}>
      <FullWidthSection>
        <ContentContainer>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              minHeight: "400px",
              padding: (theme) => theme.spacing(0, 2),
            }}
          >
            <TitleBox>
              <Typography variant="h4" align="center">
                Contact Us
              </Typography>
            </TitleBox>
          </Grid>
        </ContentContainer>
      </FullWidthSection>
      <CenteredTextSection
        spacing={2}
        sx={{
          minHeight: "200px",
          padding: (theme) => theme.spacing(20, 0, 20, 0),
          width: "100%", // Increase the width to 100%
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center">
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                type="phone"
                size="small"
                fullWidth
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ width: { xs: "100%", sm: "100%" } }}
              />
              <StyledButton type="submit">Submit</StyledButton>
            </Box>
          </Typography>
        </Container>
      </CenteredTextSection>
      <FullWidthSection>
        <ContentContainer>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              minHeight: "130px",
              padding: (theme) => theme.spacing(0, 2),
            }}
          ></Grid>
        </ContentContainer>
      </FullWidthSection>
      <EmailSubscriptionSection
        spacing={2}
        sx={{
          minHeight: "50px",
          padding: (theme) => theme.spacing(10, 10),
        }}
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
    </Box>
  );
}

export default Contact;
