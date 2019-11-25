import React from "react";
import { Container } from "@material-ui/core";
import Head from "next/head";
import Nav from "../components/nav";
import NavigationDrawer from "../components/NavigationDrawer";

import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Home = props => {
  const classes = useStyles(props);
  return (
    <Container>
      <NavigationDrawer container={Container} />
    </Container>
  );
};

export default Home;
