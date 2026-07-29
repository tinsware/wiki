import React, {type ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import type {Props as NavbarItemProps} from '@theme/NavbarItem/DefaultNavbarItem';

type Props = NavbarItemProps & {
  mobile?: boolean;
};

export default function WikiHomeNavbarItem({
  mobile,
  className,
}: Props): ReactNode {
  const {pathname} = useLocation();
  const isHome =
    pathname === '/' || pathname === '/wiki' || pathname === '/wiki/';

  if (isHome) {
    return null;
  }

  return (
    <Link
      to="/"
      className={className ?? 'navbar__item navbar__link'}
      {...(mobile ? {'data-mobile': true} : {})}>
      Wiki Home
    </Link>
  );
}
