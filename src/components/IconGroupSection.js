import React from 'react';
import { Item, Image, Span } from 'react-html-email';

const IconGroupSection = () => {
  return (
    <Item align='center'>
      <tr>
        {/* ------Item----- */}
        <tr
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <Image
            height='auto'
            src='/assets/messaging_feature1.png'
            style={{ margin: '10px auto ' }}
          />
          <Span fontSize={15} fontWeight='600' color='#000'>
            AUTOREPLY
          </Span>
        </tr>
        {/* ------Item----- */}
        {/* ------Item----- */}
        <tr
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <Image
            height='auto'
            src='/assets/messaging_feature2.png'
            style={{ margin: '10px auto ' }}
          />{' '}
          <Span fontSize={15} fontWeight='600' color='#000'>
            CHAT-BOT
          </Span>
        </tr>
        {/* ------Item----- */}
        {/* ------Item----- */}
        <tr
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <Image
            height='auto'
            src='/assets/messaging_feature3.png'
            style={{ margin: '10px auto ' }}
          />{' '}
          <Span fontSize={15} fontWeight='600' color='#000'>
            LIVE CHAT
          </Span>
        </tr>
        {/* ------Item----- */}
      </tr>
    </Item>
  );
};

export default IconGroupSection;
