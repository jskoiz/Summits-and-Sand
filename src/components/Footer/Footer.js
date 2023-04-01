import React from "react";
import { Container, Grid, Typography } from "@mui/material";
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
            <Typography variant="h6">Summits & Sand</Typography>
            <Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                Coloring books offering unique and thoughtful designs inspired
                by taking care of our environment.
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Links</Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/search"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/characters"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Wholesale Inquiries</Typography>
            <Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                If you're interested in becoming a wholesale partner, you can
                submit your inquiry using our Contact form.
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
          <CustomComponents.FullWidthImage src={avmil} alt="AVMI" />

          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
