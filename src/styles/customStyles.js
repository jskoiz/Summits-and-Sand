// customStyles.js
import { styled } from '@mui/system';
import { Card, CardMedia, Button, AppBar } from '@mui/material';


export const useStyles = () => ({
  section: {
    marginTop: 2, // theme.spacing(4),
    marginBottom: 2, // theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  media: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  callToAction: {
    marginTop: 2, // theme.spacing(2),
  },
  fullWidthImage: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  },
});

export const Section = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
}));

export const CallToActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    height: '200px',
    backgroundColor: 'white',
  }));


  export const FullWidthImage = styled('img')({
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: '50%',
  });
  
  const CustomComponents = {
    Section,
    StyledCard,
    StyledCardMedia,
    CallToActionButton,
    StyledAppBar,
    FullWidthImage,
  };
  
  export default CustomComponents;
