import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
    header: {
      textAlign: 'center',
      marginBottom: '-1rem',
    },
  }),
);

function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} title="About Me" />
      {/* TODO: Save image in storage and serve as href */}
      <CardMedia component="img" image="/images/Profile.png" />
      <CardContent>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus eget dolor sit amet aliquet.
          Suspendisse molestie dolor sit amet maximus eleifend.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Profile;
