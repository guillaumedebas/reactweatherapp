import { Container, Typography, Grid } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Typography variant='h1' component="h1" fontSize='clamp(1rem, 10vw, 10rem)' gutterBottom>
            ReactWeatherApp
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default App;
