import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Link from '../../navigation/Link';
import { Box } from '@material-ui/core';

type Props = {
  href: string;
};

const useStyles = makeStyles(theme =>
  createStyles({
    rootCard: {},
    media: {
      objectFit: 'contain',
      width: '100%',
      verticalAlign: 'top',
    },
  }),
);

function LinkContactMe({ href }: Props) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Link href={href}>
        <Card className={classes.rootCard}>
          <CardMedia component="img" className={classes.media} title="contact me" image="/images/Mail_Me.png" />
        </Card>
      </Link>
    </Box>
  );
}

export default LinkContactMe;
