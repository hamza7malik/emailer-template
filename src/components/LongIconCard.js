import React from 'react';

import { Image } from 'react-html-email';

const LongIconCard = ({ img, msg, bg, textColor, fontWeight }) => {
  return (
    <table
      width={'100%'}
      style={{
        borderRadius: '7px',
        backgroundColor: '#065e55',
        WebkitBoxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
        boxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
        margin: 'auto 16px',
      }}
    >
      <tr
        style={{
          borderRadius: '7px',
          backgroundColor: '#065e55',
          WebkitBoxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
          boxShadow: '1px 1px 5px 0.5px rgba(70, 76, 82, 0.2)',
          width: '100%',
        }}
      >
        <td width={42} style={{ padding: '0' }}>
          <img
            height='auto'
            src={img}
            width={60}
            style={{
              margin: 'auto 8px ',
              verticalAlign: 'middle',
            }}
          />
        </td>
        <td style={{ padding: '0' }}>
          <p
            style={{
              color: textColor,
              fontWeight: fontWeight,
              verticalAlign: 'middle',
              fontSize: '13px',
            }}
          >
            {msg}
          </p>
        </td>
      </tr>
    </table>
  );
};

export default LongIconCard;
