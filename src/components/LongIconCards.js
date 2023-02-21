import React from 'react';
import { Item } from 'react-html-email';

import LongIconCard from './LongIconCard';

const LongIconCards = () => {
  return (
    <Item align='center'>
      {/* <Item style={{ width: '100%' }}></Item> */}
      <table>
        <tr>
          <LongIconCard
            img={'/assets/feature_icons1.png'}
            msg={' Customized conversational chat bot.'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
          <LongIconCard
            img={'/assets/feature_icons2.png'}
            msg={' No hidden costs.'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
        </tr>
        <tr>
          <LongIconCard
            img={'/assets/feature_icons3.png'}
            msg={
              'Rich messaging features such as videos, images, emojis, location and files.'
            }
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
          <LongIconCard
            img={'/assets/feature_icons4.png'}
            msg={' Keyword-triffered service workflow'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
        </tr>
        <tr>
          <LongIconCard
            img={'/assets/feature_icons5.png'}
            msg={' Bulk promotional messages to your customers/subscribers.'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
          <LongIconCard
            img={'/assets/feature_icons6.png'}
            msg={"integration API with the company's live systems."}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
        </tr>
        <tr>
          <LongIconCard
            img={'/assets/feature_icons7.png'}
            msg={'Automated welcome message.'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />

          <LongIconCard
            img={'/assets/feature_icons8.png'}
            msg={'Chat interface for providing live support.'}
            bg={true}
            textColor={'#fff'}
            fontWeight={'500'}
          />
        </tr>
      </table>
    </Item>
  );
};

export default LongIconCards;
