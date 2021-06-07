import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/web">Contact</Link>
        </li>
        <li>
          <Link to="/web">About us</Link>
        </li>
        <li>
          <Link to="/web">FAQ's</Link>
        </li>
        <li>
          <Link to="/web">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;