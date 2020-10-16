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
    rootCard: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    media: {
      objectFit: 'contain',
      width: '100%',
      verticalAlign: 'top',
      backgroundColor: 'transparent',
      WebkitBorderRadius: '10px',
    },
  }),
);

function LinkBadgeKofi({ href }: Props) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Link href={href}>
        <Card className={classes.rootCard}>
          <CardMedia component="img" className={classes.media} title="Kofi" image="/images/Ko-Fi.png" />
        </Card>
      </Link>
    </Box>
  );
}

export default LinkBadgeKofi;
