import React from 'react';
import { Item } from 'react-html-email';

const ActionButton = ({ text }) => {
  return (
    <Item align='center'>
      <Item className='button action-button-media'>
        <p className='action-button-text-media'>{text}</p>
      </Item>
    </Item>
  );
};

export default ActionButton;
