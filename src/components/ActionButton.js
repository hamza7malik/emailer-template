import React from 'react';
import { Item, Span } from 'react-html-email';

const ActionButton = ({ text }) => {
  return (
    <table
      align='center'
      backgroundColor='transparent'
      bgcolor='transparent'
      style={{ backgroundColor: 'transparent' }}
    >
      <tbody>
        <tr align='center'>
          <td
            // className='button action-button-media'
            style={{
              backgroundColor: '#4fce5d',
              borderRadius: '50px',
              cursor: 'pointer',
              textAlign: ' center',
              textDecoration: 'none',
              display: 'inline-block',
              padding: '4px 10px ',
            }}
          >
            <span
              // className='action-button-text-media'
              style={{ fontSize: '15px', fontWeight: '600', color: '#435a64' }}
            >
              {text}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ActionButton;
