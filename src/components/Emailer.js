import React from 'react';
import { Box, Email, Item, renderEmail, Span, A } from 'react-html-email';
import { renderToStaticMarkup } from 'react-dom/server';

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

const Emailer = ({ preheader }) => {
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
      <Email
        align='center'
        headCSS={emailHeadCSS}
        title={'WhatsApp for Business Solutions'}
      >
        <Item align='center'>
          <Box
            style={backgroundStyle}
            background='/assets/whatsapp pattern3.jpg'
          >
            <Item>
              <Span
                fontSize={0}
                lineHeight={1}
                style={{
                  display: 'none',
                  maxWidth: 0,
                  maxHeight: 0,
                  overflow: 'hidden',
                  opacity: 0,
                  visibility: 'hidden',
                  msoHide: 'all',
                }}
              >
                {preheader}
              </Span>
            </Item>
            <Item align='center'>
              <A
                href='https://emailer-template-wisoft.netlify.app/'
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Can't view this email? Click here to view it in your web
                browser.
              </A>
            </Item>
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
export { Emailer };

// Convert the React component to an HTML email string
const emailHtml = renderToStaticMarkup(<Emailer />);

console.log(emailHtml);
