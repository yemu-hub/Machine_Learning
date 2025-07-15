import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import CatalogList from './components/CatalogList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              eShop App
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<CatalogList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App; 