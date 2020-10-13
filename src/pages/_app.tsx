import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import NavigationTabs from '../components/app/NavigationTabs';
import SideBar from '../components/SideBar';

import theme from '../theme';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
  },
}));

export default function MyApp(props: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const classes = useStyles();
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container className={classes.root}>
          <Box mb={2}>
            <Grid container>
              <Grid item xs={12} sm={3}></Grid>
              <Grid item xs={12} sm={9}>
                <NavigationTabs />
              </Grid>
            </Grid>
          </Box>
          <Grid container alignItems="stretch">
            <Hidden only={['xs']}>
              <Grid item sm={3}>
                <Box height="80vh">
                  <SideBar />
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={9}>
              <Box ml={1}>
                <Component {...pageProps} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
