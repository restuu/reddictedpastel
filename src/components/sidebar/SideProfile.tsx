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
  profile: {},
  socialMedia: {
    height: '5rem',

    backgroundColor: 'pink',
  },
  contact: {},
  contactMeLink: {
    color: theme.palette.text.primary,
  },
  item: {
    marginBottom: '1rem',
  },
  badge: {},
}));

function SideProfile() {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container direction="column" justify="flex-start">
      <Grid className={`${classes.item} ${classes.profile}`} item>
        <Profile />
      </Grid>
      <Grid className={`${classes.item} ${classes.socialMedia}`} item>
        Soc Med
      </Grid>
      <Grid className={`${classes.item} ${classes.contact}`} item>
        <LinkContactMe href="/contact_me" />
      </Grid>
      <Grid className={`${classes.item} ${classes.badge}`} item>
        <LinkBadgeKofi href="https://ko-fi.com/satheeayam" />
      </Grid>
    </Grid>
  );
}

export default SideProfile;
