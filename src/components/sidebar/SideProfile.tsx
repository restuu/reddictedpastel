import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  profile: {
    minHeight: '45%',
    marginBottom: 'auto',

    backgroundColor: 'pink',
  },
  socialMedia: {
    height: '12%',
    marginBottom: 'auto',

    backgroundColor: 'pink',
  },
  contact: {
    height: '12%',
    marginBottom: 'auto',

    border: '1px solid yellow',
  },
  badge: {
    height: '20%',
    marginBottom: 'auto',
    border: '1px solid yellow',
  },
}));

function SideProfile() {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container direction="column" justify="flex-start">
      <Grid className={classes.profile} item>
        Profile
      </Grid>
      <Grid className={classes.socialMedia} item>
        Soc Med
      </Grid>
      <Grid className={classes.contact} item>
        Contact
      </Grid>
      <Grid className={classes.badge} item>
        Badge
      </Grid>
    </Grid>
  );
}

export default SideProfile;
