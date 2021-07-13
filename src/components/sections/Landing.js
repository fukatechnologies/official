import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import FukaEmsImage from './../../assets/images/fuka_ems.gif';
import MessageDialog from '../sections/partials/MessageDialog';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}
class ShowDialogWin {
  isVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  show(show) {
    this.isVisible = show;
  }
}

const messageDialog = new ShowDialogWin();
const videoDialog = new ShowDialogWin();

const DialogWindowUpdate = observer(({ messageDialog }) => (
  <MessageDialog showDialog={messageDialog.isVisible} closeModalSend={() => messageDialog.show(false)}/>
));

const DialogVideoUpdate = observer(({ videoDialog }) => (
  <Modal
    id="video-modal"
    show={videoDialog.isVisible}
    handleClose={() => videoDialog.show(false)}
    video="https://www.fuka.asia/wp-content/uploads/2020/05/FUKA-Presentation.mp4"
    videoTag="iframe" />
));

const Landing = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'landing section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'landing-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="landing-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Humanising <span className="text-color-logo-green">Green</span> Technology
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We deliver revolutionary automation solutions with the highest level of commitment, quality and confidence. We leverages on the power of digital technologies to accomplish what is not possible with industrial automation alone. Founded by engineers through passion, programmers by experience, and with love for the environment at heart!
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="n" color="primary" wideMobile pr onClick={() => messageDialog.show(true)}>
                    Message Us
                    </Button>
                </ButtonGroup>
              </div>
              <DialogWindowUpdate messageDialog={messageDialog}/>
            </div>
          </div>
          <div className="landing-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.fuka.asia/wp-content/uploads/2020/05/FUKA-Presentation.mp4"
              href="#0"
              aria-controls="video-modal"
              onClick={() => videoDialog.show(true)}
            >
              <Image
                className="has-shadow"
                src={FukaEmsImage}
                alt="Landing"
                width={896}
                height={504} />
            </a>
          </div>
          <DialogVideoUpdate videoDialog={videoDialog} />
        </div>
      </div>
    </section>
  );
}

Landing.propTypes = propTypes;
Landing.defaultProps = defaultProps;

export default Landing;