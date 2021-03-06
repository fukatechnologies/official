import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
  title: 'Business Address',
  paragraph: 'No.6 Jalan 29/10A, Taman Perindustrian IKS, 68100 Batu Caves, Selangor, Malaysia.'
};

const testimonialList = []

const toUpdate = [
  {
    client:"Roman Level",
    product:"AppName",
    says:"— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat."
  },
  {
    client:"Roman Level",
    product:"AppName",
    says:"— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat."
  },
  {
    client:"Roman Level",
    product:"AppName",
    says:"— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat."
  }  
]

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimony = ({testimony }) => {
  return (
      <div className="tiles-item reveal-from-right" data-reveal-delay="200">
      <div className="tiles-item-inner">
        <div className="testimonial-item-content">
          <p className="text-sm mb-0">{testimony.says}</p>
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">{testimony.client}</span>
          <span className="text-color-low"> / </span>
          <span className="testimonial-item-link">
            <a href="#0">{testimony.product}</a>
          </span>
        </div>
      </div>
    </div>);
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>{testimonialList.map(x => <Testimony testimony={x} />)}</div>
          <div className={tilesClasses} data-reveal-delay="600">
            <Button tag="a" color="primary" wideMobile href="mailto:fukatechnologies@gmail.com">
              Email Us
            </Button>
          </div>
        </div> 
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;