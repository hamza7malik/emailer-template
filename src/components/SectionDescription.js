import React from 'react';
import { Item, Image, Span } from 'react-html-email';

const SectionDescription = ({ Message, textColor, img, widthFull }) => {
  return (
    <table align='center'>
      <tr>
        <td
          align='center'
          className={!widthFull && 'section-description-width'}
          style={{
            width: '50%',
          }}
        >
          <p
            className='section-description'
            style={{
              fontSize: '15px',
              fontWeight: '800',
              color: '#065e55',
              margin: '0',
              padding: '0',
            }}
          >
            {Message}
          </p>
        </td>
      </tr>
    </table>
  );
};

export default SectionDescription;
