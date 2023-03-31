import React from "react";
import { Grid, Typography, Container, Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import bookCover from "../assets/images/yellow-paperback-p1.jpg";
import homeC2Bg from "../assets/images/home-c2-bg.jpg"; // Import the background image
import patternBG from "../assets/images/bluepattern.jpg"; // Import the background image

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  borderColor: "black",
  border: "1px solid",
  width: 200,
  paddingTop: theme.spacing(1), // Increase this value for more top padding
  paddingBottom: theme.spacing(1), // Increase this value for more bottom padding
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(100), // 5rem of padding on the left
  paddingRight: theme.spacing(10), // 5rem of padding on the right
  [theme.breakpoints.up("md")]: {
    width: "530px", // Set the width to 530px on laptop displays and larger
  },
}));

const YellowButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5d600",
  color: "white",
  padding: theme.spacing(1),
  width: "100%",
  "&:hover": {
    backgroundColor: "#d4b900",
  },
}));

const FullWidthSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${homeC2Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginLeft: "auto",
  marginRight: "auto",
}));

const CenteredTextSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
}));
const FullWidthImageOnly = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${patternBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const EmailSubscriptionSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#b2d6ec',
  padding: theme.spacing(4),
  color: '#ffffff',
}));

const EmailInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff',
    },
  },
  '& .MuiInputBase-input': {
    color: '#ffffff',
  },
}));

// home.js
function Home() {
  return (
    <Box sx={{ marginTop: 4}}>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={bookCover}
              alt="Book Cover"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textTransform: "uppercase", fontSize: ".8rem" }}
            >
              Summits & Sand
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Summits & Sand Coloring Book - Physical
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontSize: "1.4rem",
                marginBottom: "1rem",
                marginTop: "0rem",
              }}
            >
              30 pages of mindful coloring
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}
            >
              $14.99
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "1.5rem" }}
            >
              Explore the great outdoors and make unforgettable memories with
              the "Summits and Sand" coloring book! Featuring a variety of
              fun-filled activities, from hiking in the mountains to stargazing
              while camping, this book is perfect for nature lovers of all ages.
              Enjoy fresh produce from a farmer's market, observe wildlife
              without disturbing their habitat, and take part in a beach clean
              up. With beautiful illustrations, this coloring book encourages
              you to explore the great outdoors while enjoying the company of
              others. Remember to recycle, plant a tree, and get a good night's
              rest to keep the environment thriving!
            </Typography>
            <StyledButton
              component={Link}
              to="/external-site"
              variant="outlined"
            >
              Buy Now
            </StyledButton>
          </Grid>
        </Grid>
      </ContentContainer>
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
            <Grid item xs={12} container justifyContent="center">
              <ContentBox sx={{ padding: "4rem 3.5rem" }}>
                <Typography variant="h5" align="center">
                  Coloring Sheets Available!
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Get Individual Coloring Sheets - Digital Downloads
                </Typography>
                <Box
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <YellowButton fullWidth component={Link} to="/sheet1">
                    Sheet 1
                  </YellowButton>{" "}
                </Box>
                <Box
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <YellowButton fullWidth component={Link} to="/sheet2">
                    Sheet 2
                  </YellowButton>
                </Box>
              </ContentBox>
            </Grid>
          </Grid>
        </ContentContainer>
      </FullWidthSection>
      <CenteredTextSection            spacing={2}
            sx={{
              minHeight: "200px",
              padding: (theme) => theme.spacing(20, 10),
            }}>
        <Container maxWidth="md" >
          <Typography variant="h4" align="center" gutterBottom>
            Mindful Creativity from Summits & Sand
          </Typography>
          <Typography variant="body1" align="center">
            Explore the great outdoors and make unforgettable memories with the “Summits & Sand” coloring book! Featuring a variety of fun-filled activities, from hiking in the mountains to stargazing while camping, this book is perfect for nature lovers of all ages. Enjoy fresh produce from a farmer's market, observe wildlife without disturbing their habitat, and take part in a beach clean up. With beautiful illustrations, this coloring book encourages you to explore the great outdoors while enjoying the company of others. Remember to recycle, plant a tree, and get a good night's rest to keep the environment thriving!
          </Typography>
        </Container>
      </CenteredTextSection>
      <FullWidthImageOnly>
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
            </Grid>
        </ContentContainer>
      </FullWidthImageOnly>
      <EmailSubscriptionSection          
            spacing={2}
            sx={{
              minHeight: "50px",
              padding: (theme) => theme.spacing(10, 10),
            }}>
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
              sx={{ width: { xs: '100%', sm: '50%' } }}
            />
          </Box>
        </Container>
      </EmailSubscriptionSection>
    </Box>
  );
}

export default Home;
