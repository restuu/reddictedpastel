import React from 'react';

import { useRouter } from 'next/router';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SideProfile from './SideProfile';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

function SideBar() {
  const router = useRouter();
  const classes = useStyles();

  const render = () => {
    switch (router.pathname) {
      case '/':
        return <SideProfile />;

      default:
        return null;
    }
  };

  return (
    <Grid className={classes.root} container direction="column">
      {render()}
    </Grid>
  );
}

export default SideBar;