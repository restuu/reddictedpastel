import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    border: '0.25em solid yellow',
  },
}));

const Home = props => {
  const classes = useStyles(props);
  return (
    <Box p={1.5} className={classes.root}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, magna quis dignissim scelerisque,
        libero mi vulputate ipsum, gravida ultricies erat ante vel libero. Suspendisse quis dignissim risus. Etiam
        molestie viverra venenatis. Phasellus ultricies aliquet vehicula. Morbi orci neque, gravida vitae ligula a,
        elementum dictum nulla. Cras quis enim arcu. Nulla vitae augue eu libero semper blandit. Mauris nec pretium sem,
        eget volutpat tellus. In hac habitasse platea dictumst. Sed vitae leo tristique, auctor diam et, tincidunt
        libero. Etiam rhoncus magna a sapien mattis condimentum. Suspendisse eu ante a tellus vestibulum efficitur et in
        enim. Fusce non feugiat mi. Sed interdum lacus ut orci tincidunt vestibulum.
      </Typography>
      <Typography variant="subtitle2">
        Sed felis urna, mollis ac placerat tincidunt, bibendum et ligula. Nulla id eleifend risus. Etiam massa quam,
        bibendum vel vulputate non, dictum vel tellus. Nunc nibh massa, venenatis fermentum dapibus nec, feugiat non
        diam. Vivamus egestas nibh tellus, in lobortis velit congue ac. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Proin odio justo, dignissim eu purus sit amet, porttitor rutrum
        libero. Pellentesque hendrerit odio dolor, sed tristique mauris viverra a. Mauris turpis dui, tincidunt
        tristique laoreet ut, tristique eu nulla.
      </Typography>
    </Box>
  );
};

export default Home;
