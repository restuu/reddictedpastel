import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    border: '0.25em solid yellow',
  },
}));

const Shop = props => {
  const classes = useStyles(props);
  return (
    <Box p={1.5} className={classes.root}>
      Shop
    </Box>
  );
};

export default Shop;
