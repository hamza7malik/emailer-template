import React from 'react';

import { Image } from 'react-html-email';

const LongIconCard2 = ({ img, msg, bg, textColor, fontWeight }) => {
  return (
    <table width={'100%'}>
      <tbody>
        <tr>
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
      </tbody>
    </table>
  );
};

export default LongIconCard2;
