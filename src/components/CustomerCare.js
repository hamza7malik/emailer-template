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
    <table style={{ width: '100%' }}>
      <tr>
        <td style={{ width: '100%', textAlign: 'center' }} colspan='2'>
          <table style={cardWithHeaderStyle}>
            <tr>
              <td style={cardHeader}>
                <span
                  style={{ fontSize: 15, fontWeight: '600', color: '#fff' }}
                >
                  The Future of Customer Care With
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ height: 20 }}></td>
            </tr>
            <tr style={{ display: 'table', width: '100%' }}>
              {/* ------Item----- */}
              <td
                align='center'
                style={{
                  margin: 'auto 23px',
                  display: 'table-cell',
                  verticalAlign: 'middle',
                }}
              >
                <img
                  height='auto'
                  src='https://ik.imagekit.io/emailer1axmlgirg/customer_care_icon1.png'
                  style={{ margin: '0 auto ' }}
                />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#000',
                    display: 'table',
                  }}
                >
                  Wider <br /> Reach
                </span>
              </td>
              {/* ------Item----- */}
              {/* ------Item----- */}
              <td
                align='center'
                style={{
                  margin: 'auto 23px',
                  display: 'table-cell',
                  verticalAlign: 'middle',
                }}
              >
                <img
                  height='auto'
                  src='https://ik.imagekit.io/emailer1axmlgirg/customer_care_icon2.png'
                  style={{ margin: '0 auto ' }}
                />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#000',
                    display: 'table',
                  }}
                >
                  Enhanced <br /> Engagement
                </span>
              </td>
              {/* ------Item----- */}
              {/* ------Item----- */}
              <td
                align='center'
                style={{
                  margin: 'auto 23px',
                  display: 'table-cell',
                  verticalAlign: 'middle',
                }}
              >
                <img
                  height='auto'
                  src='https://ik.imagekit.io/emailer1axmlgirg/customer_care_icon3.png'
                  style={{ margin: '0 auto ' }}
                />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#000',
                    display: 'table',
                  }}
                >
                  Evolving <br /> Preferences
                </span>
              </td>
              {/* ------Item----- */}
              {/* ------Item----- */}
              <td
                align='center'
                style={{
                  margin: 'auto 23px',
                  display: 'table-cell',
                  verticalAlign: 'middle',
                }}
              >
                <img
                  height='auto'
                  src='https://ik.imagekit.io/emailer1axmlgirg/customer_care_icon4.png'
                  style={{ margin: '0 auto ' }}
                />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#000',
                    display: 'table',
                  }}
                >
                  Social Media <br /> Connection
                </span>
              </td>
              {/* ------Item----- */}
            </tr>
            <tr>
              <td style={{ height: 20 }}></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default CustomerCare;
