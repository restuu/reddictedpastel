import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Profile from './Profile';
import LinkContactMe from './LinkContactMe';
import LinkBadgeKofi from './LinkBadge/LinkBadgeKofi';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  profile: {
    marginBottom: '1rem',
  },
  socialMedia: {
    height: '5rem',
    marginBottom: '1rem',

    backgroundColor: 'pink',
  },
  contact: {
    marginBottom: '1rem',
  },
  contactMeLink: {
    color: theme.palette.text.primary,
  },
  badge: {},
}));

function SideProfile() {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container direction="column" justify="flex-start">
      <Grid className={classes.profile} item>
        <Profile />
      </Grid>
      <Grid className={classes.socialMedia} item>
        Soc Med
      </Grid>
      <Grid className={classes.contact} item>
        <LinkContactMe href="/contact_me" />
      </Grid>
      <Grid className={classes.badge} item>
        <LinkBadgeKofi href="/" />
      </Grid>
    </Grid>
  );
}

export default SideProfile;
