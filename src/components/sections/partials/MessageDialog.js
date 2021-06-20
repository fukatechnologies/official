import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../../components/elements/Button';
import Modal from '../../../components/elements/Modal';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const MessageDialog = ({
  className,
  data,
  children,
  showDialog,
  closeModalSend,
  ...props
}) => {
  const classes = classNames(
    'section-header',
    className
  );
  const [messageText, setMessageText] = useState('');

  const sendMessage = (e) => {
    if(messageText.length < 1)
      return;

    fetch('https://messagefuka-default-rtdb.asia-southeast1.firebasedatabase.app/webquery.json', {
      crossDomain : true,
      method : 'POST',
      body : JSON.stringify({
        "key": "ZnVrYXRlY2hub2xvZ2llcw==",
        "pn":"01234567891",
        "text":messageText
      }),
      headers : { 'Content-Type' : 'application/json'}})
    .then(response => response.json())
    .then(res => {
        if (res.error) {   
            alert('Messaging server returns and error. Please email us instead.');
        } else {
            alert('Sent. Please allow up to 7-days to response.');
            closeModalSend(e);
            setMessageText('');     
        }
    });
  };

  return(<Modal
      id="message-prompt"
      show={showDialog}
      keyboardShouldPersistTaps="always"
      handleClose={closeModalSend}>
        <textarea 
          type="textarea" 
          name="messageText" 
            rows={3}
            cols={40}
            placeholder={'Please send us your inquiry, name and contact number. We will get back to you shortly.'}
            maxLength={120}
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
            />
        <div />
        <Button tag="n" color="primary" wideMobile pr onClick={sendMessage} disabled={messageText.length < 10}>
          Send
        </Button>
      </Modal>  
    );
}

MessageDialog.propTypes = propTypes;
MessageDialog.defaultProps = defaultProps;

export default MessageDialog;