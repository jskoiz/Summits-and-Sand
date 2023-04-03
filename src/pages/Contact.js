import { React, useEffect } from "react";
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
import { usePageTitle } from "../components/PageTitleContext";

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

function Contact() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Contact");
  }, [setPageTitle]);
  return (
    <Box sx={{ marginTop: 0 }}>
      <CenteredTextSection
        spacing={2}
        sx={{
          minHeight: "200px",
          padding: (theme) => theme.spacing(20, 0, 20, 0),
          width: "100%", // Increase the width to 100%
        }}
      >
        <Container maxWidth="md">
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
    </Box>
  );
}

export default Contact;
