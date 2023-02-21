import React from 'react';
import { Box, Item, Image, Span } from 'react-html-email';

import VirticleSpace from './VirticleSpace';

const CustomerCare = () => {
  const cardWithHeaderStyle = {
    width: '100%',
    height: 188,
    borderRadius: 15,
    backgroundColor: '#fff',
    WebkitBoxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
    boxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
  };
  const cardHeader = {
    backgroundColor: '#065e55',
    color: '#fff',
    padding: '10px',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  };
  return (
    <Item>
      <Item align='center'>
        <Box style={cardWithHeaderStyle}>
          <tr style={{ width: '100%', textAlign: 'center' }}>
            <td style={cardHeader} colspan='2'>
              <Span fontSize={15} fontWeight='600' color='#fff'>
                The Future of Customer Care With
              </Span>
            </td>
          </tr>
          <VirticleSpace height={20} />
          <tr>
            {/* ------Item----- */}
            <tr
              align='center'
              style={{ margin: 'auto 23px', display: 'inline-block' }}
            >
              <Image
                height='auto'
                src='/assets/customer_care_icon1.png'
                style={{ margin: '0 auto ' }}
              />{' '}
              <Span fontSize={15} fontWeight='600' color='#000'>
                Wider <br /> Reach
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
                src='/assets/customer_care_icon2.png'
                style={{ margin: '0 auto ' }}
              />{' '}
              <Span fontSize={15} fontWeight='600' color='#000'>
                Enhanced
                <br /> Engagement
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
                src='/assets/customer_care_icon3.png'
                style={{ margin: '0 auto ' }}
              />{' '}
              <Span fontSize={15} fontWeight='600' color='#000'>
                Evolving
                <br /> Preferences
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
                src='/assets/customer_care_icon4.png'
                style={{ margin: '0 auto ' }}
              />{' '}
              <Span fontSize={15} fontWeight='600' color='#000'>
                Social Media <br />
                Connection
              </Span>
            </tr>
            {/* ------Item----- */}
          </tr>
          <VirticleSpace height={20} />
        </Box>
      </Item>
    </Item>
  );
};

export default CustomerCare;
