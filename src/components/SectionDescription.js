import React from 'react';
import { Item, Image, Span } from 'react-html-email';

const SectionDescription = ({ Message, textColor, img, widthFull }) => {
  return (
    <Item align='center'>
      <Item
        align='center'
        className={!widthFull && 'section-description-width'}
      >
        <p className='section-description' style={{ color: textColor }}>
          {Message}
        </p>
      </Item>
    </Item>
  );
};

export default SectionDescription;
