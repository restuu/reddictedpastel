import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(theme => ({
  root: {
    height: '80vh',
  },
  carousel: {
    margin: '2rem 0 2rem 0',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Carousel className={classes.carousel} indicators={false} interval={5000}>
            <img className={classes.image} src="https://picsum.photos/700/400" />
            <img className={classes.image} src="https://picsum.photos/700/400" />
            <img className={classes.image} src="https://picsum.photos/700/400" />
            <img className={classes.image} src="https://picsum.photos/700/400" />
            <img className={classes.image} src="https://picsum.photos/700/400" />
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
