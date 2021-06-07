import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Image1 from './../../assets/images/features-split-image-01.png';
import Image2 from './../../assets/images/features-split-image-02.png';
import Image3 from './../../assets/images/features-split-image-03.png';

const sectionHeader = {
  title: 'Workflow that just works',
  paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
};

const featuresList = []

const toUpdate = [
  {
    product:'Lightning fast workflow',
    functionality:'Data-driven insights',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:Image1,
    alt:'Features split 01'
  },{
    product:'Lightning fast workflow',
    functionality:'Data-driven insights',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:Image2,
    alt:'Features split 02'
  },{
    product:'Lightning fast workflow',
    functionality:'Data-driven insights',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:Image3,
    alt:'Features split 03'
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