import React from 'react';
import { Item, Image, Span } from 'react-html-email';

import VirticleSpace from './VirticleSpace';

const Header = () => {
  return (
    <Item align='center'>
      {/* --------logo-------- */}
      <VirticleSpace height={25} />
      <Item>
        <Image
          height='auto'
          src='/assets/logo.png'
          style={{ margin: '0 auto ' }}
          width={160}
        />
      </Item>
      <VirticleSpace height={30} />
      {/* --------whatsapp Img-------- */}
      <Item className='top-image'>
        <Image
          height='auto'
          src='/assets/whatsapp1.png'
          style={{
            margin: '0 auto ',
          }}
          // width={160}
        />
      </Item>
      <VirticleSpace height={5} />
      {/* --------whatsapp text-------- */}
      <Item align='center' style={{ width: '460px' }}>
        <Span fontSize={42} fontWeight='900' color='#4fce5d'>
          WhatsApp for Business Solutions&nbsp;
        </Span>
      </Item>
      <VirticleSpace height={10} />
      <Item align='center'>
        <Span fontSize={15} fontWeight='700' color='#435a64'>
          PERSONALIZED USER EXPERIENCE CONVENIENCE, AND CARE ANYTIME, ANYWHERE!
        </Span>
      </Item>
      <VirticleSpace height={10} />
      <Item align='center'>
        <Span fontSize={15} fontWeight='600' color='#435a64'>
          To know more
        </Span>
      </Item>
      <VirticleSpace height={10} />
    </Item>
  );
};

export default Header;
