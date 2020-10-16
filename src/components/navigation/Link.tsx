/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props as any;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
} as any;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link: React.FunctionComponent<any> = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const handleMouseOver = (bool: boolean) => {
    if (props.onHover) {
      props.onHover(bool);
    }

    setIsHover(bool);
  };

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink
      onMouseOver={props.onHoverIn}
      onMouseOut={props.onHoverOut}
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

type Props = {
  activeClassName?: string;
  as?: string;
  className?: string;
  href: string;
  /** default to _blank */
  target?: string;
  naked?: boolean;
  onClick?: (...args: any[]) => any;
  prefetch?: boolean;
  children?: any;
  onHoverIn?: () => any;
  onHoverOut?: () => any;
};

export default React.forwardRef<any, Props>((props, ref) => <Link {...props} innerRef={ref} />);
