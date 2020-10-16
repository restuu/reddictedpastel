import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }),
);

function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* TODO: Save image in storage and serve as href */}
      <Grid container justify="center">
        <Grid item xs={10}>
          <CardMedia component="img" image="/images/Profile.png" />
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus eget dolor sit amet aliquet.
          Suspendisse molestie dolor sit amet maximus eleifend.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Profile;
