import React from 'react';
import { Item, Image, Span } from 'react-html-email';

import SectionDescription from './SectionDescription';
import VirticleSpace from './VirticleSpace';

const Footer = () => {
  return (
    <Item align='center' bgcolor='#435a64' style={{ width: '100%' }}>
      <VirticleSpace height={30} />
      <Image
        height='auto'
        src={'/assets/other_icon_whatsapp.png'}
        style={{ margin: 'auto 5px ', display: 'inline-block' }}
      />
      <p
        className='section-description'
        style={{
          color: '#fff',
          display: 'inline-block',
          margin: 'auto 0.1rem',
        }}
      >
        +971 4 321 0710
      </p>

      <VirticleSpace height={6} />
      <Item align='center' style={{ width: '60%' }}>
        <Image
          height='auto'
          src={'/assets/other_icon_location.png'}
          style={{ margin: '0 5px ', display: 'inline-block' }}
        />

        <Span fontSize={13} fontWeight='300' color={'#fff'}>
          P.O BOX: 237159, Office M-38, Curve Building, Sheikh Zeyed Road, Dubai
        </Span>
      </Item>
      <VirticleSpace height={30} />
    </Item>
  );
};

export default Footer;
