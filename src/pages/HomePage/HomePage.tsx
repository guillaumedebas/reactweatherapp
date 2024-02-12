import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import weatherSun from '../../assets/img/weathersun.webp'

function HomePage() {
  return (
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
              <CardMedia
          component="img"
          height="150"
          image={weatherSun}
          alt="Weather Image"
        />
          </Card>
        </Grid>
  )
}

export default HomePage