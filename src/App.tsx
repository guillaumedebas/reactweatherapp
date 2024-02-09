import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        style={{
          width: '100%',
          height: '100vh'
        }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            width: '100%',
            height: '100%'
          }}>

          <Card elevation={24}>
            <CardContent>
              <Typography
                variant='h1'
                component="h1"
                fontSize='clamp(0.7rem, 7vw, 7rem)'
                gutterBottom
              >
                ReactWeatherApp
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default App;
