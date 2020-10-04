import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexGrow: 1,
    height: '100%',

    border: '1px solid green',
  },
  profile: {
    height: '45%',
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
    <div className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="stretch">
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
    </div>
  );
}

export default SideProfile;
