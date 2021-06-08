import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import FeatureImage1 from './../../assets/images/feature-tile-icon-01.svg';
import FeatureImage2 from './../../assets/images/feature-tile-icon-02.svg';
import FeatureImage3 from './../../assets/images/feature-tile-icon-03.svg';
import FeatureImage4 from './../../assets/images/feature-tile-icon-04.svg';
import FeatureImage5 from './../../assets/images/feature-tile-icon-05.svg';

const sectionHeader = {
  title: 'It is all about the solution, not the product.',
  paragraph: '- Technologies and hardwares -'
};

const features = [
  {
    name: 'Cloud Technology',
    description: 'Globally accessible, high availability and robust system.',
    image: FeatureImage1,
    delayedReveal: 0,
    alt:'Features tile icon 01'
  },{
    name: 'Internet Of Things',
    description: 'Real-time monitor, control, and notification system.',
    image: FeatureImage3,
    delayedReveal: 600,
    alt:'Features tile icon 03'
  },{
    name: 'Machine Learning',
    description: 'Insights to behavior, operation, maintanence and anomaly.',
    image: FeatureImage4,
    delayedReveal: 0,
    alt:'Features tile icon 04'
  },{
    name: 'Big Data',
    description: 'Handles high volume, velocity and variety of data.',
    image: FeatureImage2,
    delayedReveal: 300,
    alt:'Features tile icon 02'
  },{
    name: 'System Automation',
    description: 'Digital controller, PLCs, HMI and Networking.',
    image: FeatureImage5,
    delayedReveal: 300,
    alt:'Features tile icon 05'
  }
]

const Feature = ({feature}) => {
  return(
    <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <Image
              src={feature.image}
              alt="Features tile icon 02"
              width={64}
              height={64} />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">
            {feature.name}
            </h4>
          <p className="m-0 text-sm">
            {feature.description}
            </p>
        </div>
      </div>
    </div>)
}

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
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
          <div className={tilesClasses}>
            {features.map(x => <Feature feature={x} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;