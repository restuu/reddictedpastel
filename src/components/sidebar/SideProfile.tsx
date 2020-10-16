import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import LinkContactMe from './LinkContactMe';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  profile: {
    minHeight: '20rem',
    marginBottom: '1rem',

    backgroundColor: 'pink',
  },
  socialMedia: {
    height: '5rem',
    marginBottom: '1rem',

    backgroundColor: 'pink',
  },
  contact: {
    height: '5rem',
    marginBottom: '1rem',
  },
  contactMeLink: {
    color: theme.palette.text.primary,
  },
  badge: {
    height: '7rem',
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
        <LinkContactMe href="/contact_me" />
      </Grid>
      <Grid className={classes.badge} item>
        Badge
      </Grid>
    </Grid>
  );
}

export default SideProfile;
