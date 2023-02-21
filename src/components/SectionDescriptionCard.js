import React from 'react';
import { Item, Span } from 'react-html-email';

import VirticleSpace from './VirticleSpace';

const SectionDescriptionCard = ({ Message }) => {
  const cardStyle = {
    borderRadius: 7,
    backgroundColor: '#606060',
  };
  return (
    <Item align='center'>
      <td style={cardStyle}>
        <VirticleSpace height={'6px'} />
        <Item align='center' style={{ width: '260px' }}>
          <Span fontSize={15} fontWeight='600' color='#fff'>
            {Message}
          </Span>
        </Item>
        <VirticleSpace height={'6px'} />
      </td>
    </Item>
  );
};

export default SectionDescriptionCard;
