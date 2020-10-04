import React from 'react';
import Link from './navigation/Link';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const routes = [
  {
    label: 'Home',
    href: '/',
    value: 'home',
  },
  {
    label: 'Works',
    href: '/works',
    value: 'works',
  },
  {
    label: 'Blog',
    href: '/blog',
    value: 'blog',
  },
  {
    label: 'Shop',
    href: '/shop',
    value: 'shop',
  },
];

const useStyles = makeStyles(theme => ({
  appLink: {
    color: theme.palette.text.primary,
  },
  activeAppLink: {
    color: theme.palette.text.secondary,
  },
}));

function NavigationTabs() {
  const classes = useStyles();

  return (
    <Grid container justify="space-evenly">
      {routes.map(opt => (
        <Grid key={opt.value} item>
          <Link className={classes.appLink} href={opt.href} activeClassName={classes.activeAppLink}>
            {opt.label}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationTabs;
