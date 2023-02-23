import React from 'react';
import { Item, Image, Span } from 'react-html-email';

import VirticleSpace from './VirticleSpace';

const Header = () => {
  return (
    <table align='center' style={{ margin: 'auto' }}>
      <tr>
        <td style={{ padding: '0', textAlign: 'center' }}>
          {/* --------logo-------- */}
          <table>
            <tr align='center'>
              <td style={{ paddingBottom: '25px' }}>
                <img
                  src='https://ik.imagekit.io/emailer1axmlgirg/logo.png'
                  width={160}
                  height='auto'
                  style={{ margin: '0 auto' }}
                />
              </td>
            </tr>
            <tr align='center'>
              <td style={{ paddingBottom: '30px' }}>
                {/* --------whatsapp Img-------- */}
                <table className='top-image'>
                  <tr>
                    <td>
                      <img
                        src='https://ik.imagekit.io/emailer1axmlgirg/whatsapp1.png'
                        height='auto'
                        style={{ margin: '0 auto' }}
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ width: '460px' }}>
                {/* --------whatsapp text-------- */}
                <table align='center'>
                  <tr>
                    <td
                      style={{
                        fontSize: '42px',
                        fontWeight: '900',
                        color: '#4fce5d',
                      }}
                    >
                      WhatsApp for Business Solutions&nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: '10px' }}>
                <table align='center'>
                  <tr>
                    <td
                      style={{
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#435a64',
                      }}
                    >
                      PERSONALIZED USER EXPERIENCE CONVENIENCE, AND CARE
                      ANYTIME, ANYWHERE!
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: '10px' }}>
                <table align='center'>
                  <tr>
                    <td
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#435a64',
                      }}
                    >
                      To know more
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default Header;
