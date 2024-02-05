import React from 'react';
import {
  Card,
  Typography,
  Box,
  TextField,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const ContentBox = styled(Box)({
  padding: '10px',
  textAlign: 'center',
});

const FuelImage = styled('img')({
  width: '100px',
  height: '100px',
  margin: '10px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const Fuel = () => {
  const CustomCard = styled(Card)({
    border: '1px solid #e0e0e0',
  });

  return (
    <Container>
      <CustomCard>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">
              <strong>Select Fuel Type</strong>
            </Typography>
          </Toolbar>
        </AppBar>

        <ContentBox>
          <TextField
            label="Search Fuel Type"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="inherit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </ContentBox>

        <ContentBox>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <FuelImage
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/PETROL.svg"
                alt="Petrol"
              />
              <Typography variant="subtitle1">Petrol</Typography>
            </Grid>
            <Grid item>
              <FuelImage
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/CNG.svg"
                alt="CNG"
              />
              <Typography variant="subtitle1">CNG</Typography>
            </Grid>
            <Grid item>
              <FuelImage
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/DIESEL.svg"
                alt="Diesel"
              />
              <Typography variant="subtitle1">Diesel</Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </CustomCard>
    </Container>
  );
};

export default Fuel;