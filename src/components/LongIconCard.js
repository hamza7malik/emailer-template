import React from 'react';

import { Image } from 'react-html-email';

const LongIconCard = ({ img, msg, bg, textColor, fontWeight }) => {
  return (
    <td className='card-box'>
      <td className={bg === true ? 'cardStyle' : ''}>
        <tr>
          <td>
            <Image
              height='auto'
              src={img}
              width={60}
              style={{
                margin: 'auto 8px ',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td>
            <p
              className='card-text'
              style={{
                color: textColor,
                fontWeight: fontWeight,
              }}
            >
              {msg}
            </p>
          </td>
        </tr>
      </td>
    </td>
  );
};

export default LongIconCard;
