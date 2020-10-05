import React from 'react';
import Link from './navigation/Link';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

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
    href: 'http://blog.reddictedpastel.com/',
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

  const router = useRouter();

  const handleClick = (href: string) => e => {
    e.preventDefault();

    if (href === 'http://blog.reddictedpastel.com/') {
      window.open(href);
      return;
    }

    router.push(href);
  };

  return (
    <Grid container justify="space-evenly">
      {routes.map(opt => (
        <Grid key={opt.value} item>
          <Link
            className={classes.appLink}
            href={opt.href}
            onClick={handleClick(opt.href)}
            activeClassName={classes.activeAppLink}
          >
            {opt.label}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationTabs;
