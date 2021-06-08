import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Image1 from './../../assets/images/fuka_uptimecontroller.jpg';
import Image2 from './../../assets/images/fuka_monitor.jpg';
import Image3 from './../../assets/images/fuka_optimizer.jpg';

const sectionHeader = {
  title: 'Product Highlights',
  paragraph: 'Documented here are some of the many use cases delivered by our team of industry experts.'
};

const featuresList = [
  {
    product:'Smart Controller System',
    functionality:'Uptime Controller',
    description:'Maximizes the lifespan of chillers and reduces downtime due to maintanence by intelligently managing loads while ensuring a reliable 24/7 system uptime.',
    image:Image1,
    alt:'Features 01'
  },{
    product:'Cloud System',
    functionality:'Automated Monitoring and Alert System',
    description:'Enables 24/7 remote accessible system to ensure system and production lines are operating smoothly. System can be upgraded to provide notification capabilities and alerts technical team in event of system anomalies almost instaneously, avoiding unexpected downtime, thus reducing chances of production losses.',
    image:Image2,
    alt:'Features 02'
  },{
    product:'Smart Controller System',
    functionality:'Energy Optimizer System',
    description:'A proprietary algorithm to maximize the full capability of existing systems and ensuring devices are constantly operating at optimum state.',
    image:Image3,
    alt:'Features 03'
  }]

  const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const Featured = ({feature, imageFill }) => {
    return (
      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{feature.product}</div>
          <h3 className="mt-0 mb-12">{feature.functionality}</h3>
          <p className="m-0">{feature.description}</p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <Image
            src={ feature.image }
             alt={'feature.alt'}
            width={528}
            height={396} />
        </div>
      </div>)
  }

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>{featuresList.map(x => <Featured feature={x} imageFill={imageFill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;