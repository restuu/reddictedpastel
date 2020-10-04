import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styled } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import NavigationTabs from '../components/NavigationTabs';
import SideBar from '../components/SideBar';

import theme from '../theme';

const MyContainer = styled(Container)({
  paddingTop: 50,
  // height: '90vh',

  backgroundColor: 'grey',
});

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MyContainer>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <SideBar />
              </Grid>
              <Grid item xs={12} sm={9}>
                <NavigationTabs />

                <Container>
                  <Component {...pageProps} />
                </Container>
              </Grid>
            </Grid>
          </MyContainer>
        </ThemeProvider>
      </>
    );
  }
}
