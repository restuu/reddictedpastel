import React from 'react';
import Link from './Link';
import Grid from '@material-ui/core/Grid';

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

function NavigationTabs() {
  return (
    <Grid container justify="space-evenly" xs={12}>
      {routes.map(opt => (
        <Grid item>
          <Link href={opt.href}>{opt.label}</Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationTabs;
