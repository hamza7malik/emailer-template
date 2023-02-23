import React from 'react';
import { Item, Image, Span } from 'react-html-email';

import SectionDescription from './SectionDescription';
import VirticleSpace from './VirticleSpace';

const Footer = () => {
  return (
    <table align='center' width={'100%'} style={{ backgroundColor: '#435a64' }}>
      <tbody style={{ backgroundColor: '#435a64' }}>
        <VirticleSpace height={30} />
        <tr align='center' style={{ marginTop: '30px' }}>
          <td
            style={{
              margin: 'auto 5px ',
              display: 'inline-block',
            }}
          >
            <img
              height='auto'
              src={
                'https://ik.imagekit.io/emailer1axmlgirg/other_icon_whatsapp.png'
              }
            />
          </td>
          <td
            className='section-description'
            style={{
              color: '#fff',
              display: 'inline-block',
              margin: 'auto 0.1rem',
            }}
          >
            +971 4 321 0710
          </td>
        </tr>
        <tr>
          <td height={6}></td>
        </tr>
        <tr>
          <td align='center' style={{ width: '60%' }}>
            <img
              height='auto'
              src={
                'https://ik.imagekit.io/emailer1axmlgirg/other_icon_location.png'
              }
              style={{ margin: '0 5px ', display: 'inline-block' }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: '300',
                color: '#fff',
                verticalAlign: 'middle',
              }}
            >
              P.O BOX: 237159, Office M-38, Curve Building, Sheikh Zeyed Road,
              Dubai
            </span>
          </td>
        </tr>
        <tr>
          <td height={30}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Footer;
