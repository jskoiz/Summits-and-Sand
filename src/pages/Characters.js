import React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import choco from "../assets/images/choco.png";
import homeC2Bg from "../assets/images/home-c2-bg.jpg"; // Import the background image
import patternBG from "../assets/images/bluepattern.jpg"; // Import the background image

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
  backgroundColor: "white",
}));
const FullWidthImageOnly = styled(Box)(({ theme }) => ({
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

// home.js
function Characters() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
          }}
        >
          <CenteredTextSection
            spacing={2}
            sx={{
              minHeight: "50px",
              padding: (theme) => theme.spacing(5, 0),
            }}
          >
            <Container maxWidth="md">
              <Typography variant="body1" align="center">
                Meet the colorful characters of Summits and Sand! Choco, Peach,
                Elle, Luna, and Max are a friendly group of animal professionals
                who work and play in the great outdoors from Summits and Sand!
              </Typography>
            </Container>
          </CenteredTextSection>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={choco}
              alt="Choco"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Choco, Environmental Planning and Sustainability Specialist
            </Typography>
            <Typography>
              Choco Bear is a passionate conservation biologist with a mission
              to protect and preserve our planet's precious resources. He has
              dedicated his career to developing innovative solutions to promote
              sustainability and biodiversity, working with communities and
              organizations to create a better future for all. In his free time,
              Choco loves to explore his local farmers' markets, gathering fresh
              and locally grown ingredients to whip up delicious and sustainable
              meals in his kitchen. He believes that every small action can make
              a big impact and strives to inspire others to join him in his
              efforts to create a healthier and more sustainable world.
            </Typography>{" "}
            <Typography>
              He is also a dedicated volunteer for alternative energy
              initiatives and strives to promote energy conservation in all
              aspects of life. Choco's commitment to environmental stewardship
              is reflected in his work and personal life, and he continues to
              seek new ways to make a positive impact on the world.
            </Typography>
            <Typography>
              Choco holds a PhD in Wildlife Conservation Biology and has
              extensive experience in developing sustainable practices for
              forest conservation and eco-friendly communities.
            </Typography>
          </Grid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={choco}
              alt="Choco"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Choco, Environmental Planning and Sustainability Specialist
            </Typography>
            <Typography>
              Choco Bear is a passionate conservation biologist with a mission
              to protect and preserve our planet's precious resources. He has
              dedicated his career to developing innovative solutions to promote
              sustainability and biodiversity, working with communities and
              organizations to create a better future for all. In his free time,
              Choco loves to explore his local farmers' markets, gathering fresh
              and locally grown ingredients to whip up delicious and sustainable
              meals in his kitchen. He believes that every small action can make
              a big impact and strives to inspire others to join him in his
              efforts to create a healthier and more sustainable world.
            </Typography>{" "}
            <Typography>
              He is also a dedicated volunteer for alternative energy
              initiatives and strives to promote energy conservation in all
              aspects of life. Choco's commitment to environmental stewardship
              is reflected in his work and personal life, and he continues to
              seek new ways to make a positive impact on the world.
            </Typography>
            <Typography>
              Choco holds a PhD in Wildlife Conservation Biology and has
              extensive experience in developing sustainable practices for
              forest conservation and eco-friendly communities.
            </Typography>
          </Grid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={choco}
              alt="Choco"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Choco, Environmental Planning and Sustainability Specialist
            </Typography>
            <Typography>
              Choco Bear is a passionate conservation biologist with a mission
              to protect and preserve our planet's precious resources. He has
              dedicated his career to developing innovative solutions to promote
              sustainability and biodiversity, working with communities and
              organizations to create a better future for all. In his free time,
              Choco loves to explore his local farmers' markets, gathering fresh
              and locally grown ingredients to whip up delicious and sustainable
              meals in his kitchen. He believes that every small action can make
              a big impact and strives to inspire others to join him in his
              efforts to create a healthier and more sustainable world.
            </Typography>{" "}
            <Typography>
              He is also a dedicated volunteer for alternative energy
              initiatives and strives to promote energy conservation in all
              aspects of life. Choco's commitment to environmental stewardship
              is reflected in his work and personal life, and he continues to
              seek new ways to make a positive impact on the world.
            </Typography>
            <Typography>
              Choco holds a PhD in Wildlife Conservation Biology and has
              extensive experience in developing sustainable practices for
              forest conservation and eco-friendly communities.
            </Typography>
          </Grid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={choco}
              alt="Choco"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Choco, Environmental Planning and Sustainability Specialist
            </Typography>
            <Typography>
              Choco Bear is a passionate conservation biologist with a mission
              to protect and preserve our planet's precious resources. He has
              dedicated his career to developing innovative solutions to promote
              sustainability and biodiversity, working with communities and
              organizations to create a better future for all. In his free time,
              Choco loves to explore his local farmers' markets, gathering fresh
              and locally grown ingredients to whip up delicious and sustainable
              meals in his kitchen. He believes that every small action can make
              a big impact and strives to inspire others to join him in his
              efforts to create a healthier and more sustainable world.
            </Typography>{" "}
            <Typography>
              He is also a dedicated volunteer for alternative energy
              initiatives and strives to promote energy conservation in all
              aspects of life. Choco's commitment to environmental stewardship
              is reflected in his work and personal life, and he continues to
              seek new ways to make a positive impact on the world.
            </Typography>
            <Typography>
              Choco holds a PhD in Wildlife Conservation Biology and has
              extensive experience in developing sustainable practices for
              forest conservation and eco-friendly communities.
            </Typography>
          </Grid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={choco}
              alt="Choco"
              style={{
                maxWidth: "100%",
                maxHeight: "510px",
                width: "auto",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: "0rem", marginTop: "0rem" }}
            >
              Choco, Environmental Planning and Sustainability Specialist
            </Typography>
            <Typography>
              Choco Bear is a passionate conservation biologist with a mission
              to protect and preserve our planet's precious resources. He has
              dedicated his career to developing innovative solutions to promote
              sustainability and biodiversity, working with communities and
              organizations to create a better future for all. In his free time,
              Choco loves to explore his local farmers' markets, gathering fresh
              and locally grown ingredients to whip up delicious and sustainable
              meals in his kitchen. He believes that every small action can make
              a big impact and strives to inspire others to join him in his
              efforts to create a healthier and more sustainable world.
            </Typography>{" "}
            <Typography>
              He is also a dedicated volunteer for alternative energy
              initiatives and strives to promote energy conservation in all
              aspects of life. Choco's commitment to environmental stewardship
              is reflected in his work and personal life, and he continues to
              seek new ways to make a positive impact on the world.
            </Typography>
            <Typography>
              Choco holds a PhD in Wildlife Conservation Biology and has
              extensive experience in developing sustainable practices for
              forest conservation and eco-friendly communities.
            </Typography>
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
          ></Grid>
        </ContentContainer>
      </FullWidthImageOnly>
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

export default Characters;
