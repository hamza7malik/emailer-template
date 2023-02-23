import React from 'react';
import { Item, Image, Span } from 'react-html-email';

const IconGroupSection = () => {
  return (
    <table align='center'>
      <tr>
        {/* ------Item----- */}
        <td
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <table>
            <tr>
              <td>
                <img
                  src='https://ik.imagekit.io/emailer1axmlgirg/messaging_feature1.png'
                  style={{ margin: '10px auto ', height: 'auto' }}
                  height='auto'
                />
              </td>
            </tr>
            <tr align='center'>
              <td style={{ fontSize: 15, fontWeight: 600, color: '#000' }}>
                AUTOREPLY
              </td>
            </tr>
          </table>
        </td>
        {/* ------Item----- */}
        {/* ------Item----- */}
        <td
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <table>
            <tr>
              <td>
                <img
                  src='https://ik.imagekit.io/emailer1axmlgirg/messaging_feature2.png'
                  style={{ margin: '10px auto ', height: 'auto' }}
                  height='auto'
                />
              </td>
            </tr>
            <tr align='center'>
              <td style={{ fontSize: 15, fontWeight: 600, color: '#000' }}>
                CHAT-BOT
              </td>
            </tr>
          </table>
        </td>
        {/* ------Item----- */}
        {/* ------Item----- */}
        <td
          align='center'
          style={{ margin: 'auto 23px', display: 'inline-block' }}
        >
          <table>
            <tr>
              <td>
                <img
                  src='https://ik.imagekit.io/emailer1axmlgirg/messaging_feature3.png'
                  style={{ margin: '10px auto ', height: 'auto' }}
                  height='auto'
                />
              </td>
            </tr>
            <tr align='center'>
              <td style={{ fontSize: 15, fontWeight: 600, color: '#000' }}>
                LIVE CHAT
              </td>
            </tr>
          </table>
        </td>
        {/* ------Item----- */}
      </tr>
    </table>
  );
};

export default IconGroupSection;
