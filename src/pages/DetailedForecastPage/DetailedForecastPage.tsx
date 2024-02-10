import { Card, CardContent, Grid, Typography } from '@mui/material'

function DetailedForecastPage() {
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
                DetailedForecastPage
              </Typography>

            </CardContent>
          </Card>
        </Grid>
  )
}

export default DetailedForecastPage