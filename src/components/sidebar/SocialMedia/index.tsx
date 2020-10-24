import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Link from '../../navigation/Link';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    itemContainer: {},
  }),
);

function SocialMedia() {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={3}>
        <Link href="/">
          <Card className={classes.itemContainer}>
            <CardMedia component="img" title="dribble" image="/images/Dribble.png" />
          </Card>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link href="/">
          <Card className={classes.itemContainer}>
            <CardMedia component="img" title="instagram" image="/images/instagram.png" />
          </Card>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link href="/">
          <Card className={classes.itemContainer}>
            <CardMedia component="img" title="behance" image="/images/behance.png" />
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

export default SocialMedia;
