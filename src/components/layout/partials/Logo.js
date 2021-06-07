import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
    <Link to="/">
      <Image
        src={require('./../../../assets/images/fuka_logo.png')}
        alt="Open"
        width={192} />
    </Link>
    <Image
        src={require('./../../../assets/images/fuka_text.png')}
        width={192} />
    </div>
  );
}

export default Logo;