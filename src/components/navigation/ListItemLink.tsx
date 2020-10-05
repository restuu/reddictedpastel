import React from 'react';

import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { useRouter } from 'next/router';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  const router = useRouter();

  const handleClick = (href: string) => e => {
    e.preventDefault();
    router.push(href);
  };

  return <ListItem button component="a" onClick={handleClick(props.href)} {...props} />;
}

export default ListItemLink;
