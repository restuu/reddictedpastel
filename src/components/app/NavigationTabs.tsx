import React, { useReducer } from 'react';
import Link from '../navigation/Link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';
import { routeReducer } from './reducer/routeReducer';

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
  container: {
    height: '3.5rem',
  },
  appLink: {
    color: '#8ed7d5',
  },
  activeAppLink: {
    color: '#fa93a5',
  },
  appLinkHover: {
    fontSize: 40,
  },
  text: {
    verticalAlign: 'bottom',
  },
}));

function NavigationTabs() {
  const [state, dispatch] = useReducer(routeReducer, {});

  const classes = useStyles();

  const router = useRouter();

  const handleClick = (href: string) => e => {
    e.preventDefault();

    if (href.startsWith('http')) {
      window.open(href);
      return;
    }

    router.push(href);
  };

  return (
    <Grid container justify="space-evenly" alignItems="flex-end" className={classes.container}>
      {routes.map(opt => (
        <Grid key={opt.value} item>
          <Link
            className={classes.appLink}
            href={opt.href}
            onClick={handleClick(opt.href)}
            onHoverIn={() => dispatch({ type: 'hoverIn', payload: { route: opt.value } })}
            onHoverOut={() => dispatch({ type: 'hoverOut', payload: { route: opt.value } })}
            activeClassName={classes.activeAppLink}
          >
            <Typography
              variant="h1"
              component="span"
              className={`${classes.text} ` + (state[opt.value]?.isHover ? classes.appLinkHover : '')}
            >
              {opt.label}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationTabs;
