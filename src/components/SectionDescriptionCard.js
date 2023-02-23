import React from 'react';
import { Item, Span } from 'react-html-email';

import VirticleSpace from './VirticleSpace';

const SectionDescriptionCard = ({ Message }) => {
  const cardStyle = {
    borderRadius: 7,
    backgroundColor: '#606060',
  };
  return (
    <table align='center'>
      <tr>
        <td style={cardStyle}>
          <table align='center' style={{ width: '260px' }}>
            <tr>
              <td style={{ padding: '6px' }}>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  {Message}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default SectionDescriptionCard;
