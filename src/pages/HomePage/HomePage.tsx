import { Card, CardContent, CardMedia, Collapse, Grid, Typography, IconButton, CardActions } from '@mui/material';
import weatherSun from '../../assets/img/weathersun.webp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

function HomePage() {
const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandMore = styled(({ expand, ...other }: ExpandMoreProps) => {
  const { ...otherProps } = other;
  return <IconButton {...otherProps} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


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
         <CardActions disableSpacing>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>

  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>
      Ici prochainement plus d'informations !
      </Typography>
      {/* Autres paragraphes si nécessaire */}
    </CardContent>
  </Collapse>
          </Card>
        </Grid>
  )
}

export default HomePage