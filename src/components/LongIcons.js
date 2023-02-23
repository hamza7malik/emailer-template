import React from 'react';
import { Item } from 'react-html-email';

import LongIconCard2 from './LongIconCard2';

const LongIcons = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon1.png'}
              msg={'Discount, Offer & Promotions'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon2.png'}
              msg={'Placing & Tracking Orders'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
        </tr>
        <tr>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon3.png'}
              msg={'Appointments & Reservations'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon4.png'}
              msg={'Notifications & Enquiries'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
        </tr>
        <tr>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon5.png'}
              msg={'Payments & Account Management'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon6.png'}
              msg={'Branch Locator'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
        </tr>
        <tr>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon7.png'}
              msg={'Help & Support'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
          <td>
            <LongIconCard2
              img={'https://ik.imagekit.io/emailer1axmlgirg/other_icon8.png'}
              msg={'Suggestions & Complaints'}
              bg={false}
              textColor={'#606060'}
              fontWeight={'700'}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LongIcons;
