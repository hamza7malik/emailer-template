import React from 'react';
import { Item, Span } from 'react-html-email';

const ActionButton = ({ text }) => {
  return (
    <Item align='center'>
      <Item className='button action-button-media'>
        <Span className='action-button-text-media'>{text}</Span>
      </Item>
    </Item>
  );
};

export default ActionButton;
