// Models.jsx

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  InputAdornment,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const imagesData = [
  { id: 1, name: 'Alto K10', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-201.jpeg' },
  { id: 2, name: 'WagonR', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-251.jpeg' },
  { id: 3, name: 'Vitara Brezza', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-481.jpeg' },
  { id: 4, name: 'Celerio', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-208.jpeg' },
  { id: 5, name: 'Grand vitara', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-223.jpeg' },
  { id: 6, name: 'Ignis', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-482.jpeg' },
  { id: 7, name: 'Swift', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-240.jpeg' },
  { id: 8, name: 'Swift-dzire', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-243.jpeg' },
  { id: 9, name: 'Ertiga', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-216.jpeg' },
  { id: 10, name: 'Ciaz', image: 'https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-211.jpeg' },
];

const Models = ({ selectedBrand }) => {
  const filteredModels = imagesData.filter((image) => image.name === selectedBrand.name);

  return (
    <div style={{ flexGrow: 2 }}>
      <Card
        style={{
          minWidth: 300,
          maxWidth: 600,
          margin: 'auto',
          maxHeight: 'calc(500vh - 350px)',
          marginTop: '5px',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <AppBar position="static" style={{ marginBottom: '8px' }}>
            <Toolbar>
              <IconButton edge="start" aria-label="back" style={{ color: '#fff' }}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6">
                <strong>Select Model</strong>
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField
            style={{ marginBottom: '8px' }}
            label="Search Model"
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
          <Grid container spacing={2} style={{ display: 'flex', overflowX: 'auto', maxHeight: 'calc(150vh - 500px)' }}>
            {filteredModels.map((model) => (
              <Grid item key={model.id} xs={12} sm={3} md={4} lg={4} style={{ flex: '0 0 auto', marginRight: '16px', textAlign: 'center' }}>
                <img src={model.image} alt={model.name} style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }} />
                <Typography variant="subtitle1">{model.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Models;
