import React from 'react';
import Link from './navigation/Link';
import Grid from '@material-ui/core/Grid';

import { styled } from '@material-ui/core/styles';

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

const MyLink = styled(Link)({
  color: 'yellow',
});

function NavigationTabs() {
  return (
    <Grid container justify="space-evenly" xs={12}>
      {routes.map(opt => (
        <Grid item>
          <MyLink href={opt.href}>{opt.label}</MyLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationTabs;
