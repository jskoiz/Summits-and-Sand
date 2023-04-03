import { React, useEffect } from "react";
import { usePageTitle } from "../components/PageTitleContext";
import { Grid, Typography, Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import bookCover from "../assets/images/yellow-paperback-p1.jpg";
import orangeBook from "../assets/images/orangebook.jpg";
import patternBG from "../assets/images/bluepattern.jpg"; // Import the background image

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  borderColor: "black",
  border: "1px solid",
  width: 300,
  paddingTop: theme.spacing(1), // Increase this value for more top padding
  paddingBottom: theme.spacing(1), // Increase this value for more bottom padding
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
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

function Shop() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Shop");
  }, [setPageTitle]);
  return (
    <Box sx={{ marginTop: 0 }}>
      <ContentContainer>
        <Grid
          container
          spacing={0}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "700px" },
            backgroundColor: "white",
            paddingBottom: "5rem",
            paddingTop: "5rem",
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
              Summits & Sand Coloring Book
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
              30 Scenes for Mindful Coloring and Inspiration
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}
            >
              $14.99
            </Typography>
            <Typography>
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
              to="https://bookshop.org/p/books/summits-sand-coloring-book-kylee-neely/19791766?ean=9798987859728"
              variant="outlined"
            >
              Buy Now at Barnes and Noble
            </StyledButton>
          </Grid>
        </Grid>
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
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={orangeBook}
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
              Summits & Sand Coloring Book
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
              15 Scenes for Mindful Coloring and Inspiration
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}
            >
              $8.99
            </Typography>
            <Typography>
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
              to="https://www.barnesandnoble.com/w/summits-sand-coloring-book-summits-sand/1143210963?ean=9798987859711"
              variant="outlined"
            >
              Buy Now at Barnes and Noble
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
              minHeight: "130px",
              padding: (theme) => theme.spacing(0, 2),
            }}
          ></Grid>
        </ContentContainer>
      </FullWidthSection>
    </Box>
  );
}

export default Shop;
