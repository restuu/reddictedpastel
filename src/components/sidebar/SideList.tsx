import React from 'react';

import List from '@material-ui/core/List';

import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ListItemLink from '../navigation/ListItemLink';

const list = [
  {
    title: 'All',
  },
  {
    title: 'Traditional',
  },
  {
    title: 'Digital',
  },
  {
    title: 'Books',
  },
  {
    title: 'Etc',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '50%',
    backgroundColor: 'pink',
  },
  itemList: {},
}));

function SideList() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      {list.map((el, i) => (
        <ListItemLink key={`work-list-${i}`} href="/works">
          <ListItemText primary={el.title} />
        </ListItemLink>
      ))}
    </List>
  );
}

export default SideList;
