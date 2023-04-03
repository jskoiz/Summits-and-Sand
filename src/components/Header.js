import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import logo from "../assets/images/logo.png";
import patternBG from "../assets/images/bluepattern.jpg"; // Import the background image
import { usePageTitle } from "../components/PageTitleContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(0, 0),
  backgroundColor: "white",
  boxShadow: "none",
  borderBottom: "0.1rem solid rgba(0, 0, 0, 0.08)",
}));

const AnnouncementBar = styled("div")(({ theme }) => ({
  height: "40px",
  backgroundColor: "#b2d6ec",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2, 0),
}));

const StyledLogo = styled("img")(({ theme }) => ({
  height: "200px",
  padding: theme.spacing(2, 0),
}));
const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
}));
const TitleBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(3, 10, 3, 10),
  borderRadius: theme.spacing(1),
}));
const FullWidthSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${patternBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "0rem",
}));
const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 0,
}));

function Header() {
  const { pageTitle } = usePageTitle();
  return (
    <StyledAppBar position="static" color="default">
      <AnnouncementBar>
        <Typography
          variant="body2"
          align="center"
          color="white"
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
              md: "1rem",
            },
          }}
        >
          Order your Summits & Sand Coloring Book Today!
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
                {pageTitle}
              </Typography>
            </TitleBox>
          </Grid>
        </ContentContainer>
      </FullWidthSection>
    </StyledAppBar>
  );
}

export default Header;
