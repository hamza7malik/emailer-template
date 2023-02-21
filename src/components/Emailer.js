import React from 'react';
import { Box, Email, Item } from 'react-html-email';

import ActionButton from './ActionButton';
import CustomerCare from './CustomerCare';
import Footer from './Footer';
import Header from './Header';
import IconGroupSection from './IconGroupSection';
import LongIconCards from './LongIconCards';
import LongIcons from './LongIcons';
import SectionDescription from './SectionDescription';
import SectionDescriptionCard from './SectionDescriptionCard';
import VirticleSpace from './VirticleSpace';

const Emailer = () => {
  const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim();

  const backgroundStyle = {
    WebkitBoxShadow: '6px 6px 40px 3px rgba(140, 152, 164, 0.2)',
    borderRadius: 7,
    boxShadow: '6px 6px 40px 3px rgba(140, 152, 164, 0.2)',
    margin: '0 auto',
    width: '100%',
    padding: '0 32px',
  };

  const containerStyle = {
    backgroundColor: '#FFF',
  };

  return (
    <Box align='center' style={containerStyle}>
      <Email align='center' headCSS={emailHeadCSS} title={'subject'}>
        <Item align='center'>
          <Box
            style={backgroundStyle}
            background='/assets/whatsapp pattern3.jpg'
          >
            <Header />
            <ActionButton text={' Inquire Now'} />
            <VirticleSpace height={25} />
            <CustomerCare />
            <VirticleSpace height={25} />
            <SectionDescription
              Message={'UNMATCHED FEATURES'}
              textColor={'#435a64'}
            />
            <VirticleSpace height={25} />
            <LongIconCards />
            <VirticleSpace height={25} />
            <SectionDescription
              Message={'MULTIPLE MESSAGING FORMATS TO CONVERSE WITH USERS'}
              textColor={'#435a64'}
            />
            <VirticleSpace height={25} />
            <IconGroupSection />
            <VirticleSpace height={50} />
            <SectionDescriptionCard
              Message={'ONE-STOP SOLUTION FOR ALL COMUNICATION:'}
            />
            <VirticleSpace height={50} />
            <LongIcons />
            <VirticleSpace height={25} />
            <SectionDescription
              Message={
                "Don't miss out! Connect with Wisoft Solutions to Onboard Your business WhatsApp!"
              }
              widthFull={true}
              textColor={'#435a64'}
            />
            <VirticleSpace height={3} />
            <Item align='center' style={{ transform: ' translateY(13px)' }}>
              <ActionButton text={' Inquire Now'} />
            </Item>
          </Box>
        </Item>
        <Footer />
      </Email>
    </Box>
  );
};

export default Emailer;
