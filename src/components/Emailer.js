import React from 'react';
import { Box, Email, Item, renderEmail, Span, A } from 'react-html-email';
import { renderToStaticMarkup } from 'react-dom/server';
import css from '../App.module.css';
// import inlineCss from 'inline-css';
import juice from 'juice';
import cheerio from 'cheerio';

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
            background='https://ik.imagekit.io/emailer1axmlgirg/whatsapp pattern3.jpg'
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
            <Item align='center'>
              <ActionButton text={' Inquire Now'} />
            </Item>
            <VirticleSpace height={25} />
            <Item>
              <CustomerCare />
            </Item>
            <VirticleSpace height={25} />
            <Item align='center'>
              <SectionDescription
                Message={'UNMATCHED FEATURES'}
                textColor={'#435a64'}
              />
            </Item>
            <VirticleSpace height={25} />
            <Item align='center'>
              <LongIconCards />
            </Item>
            <VirticleSpace height={25} />
            <Item align='center'>
              <SectionDescription
                Message={'MULTIPLE MESSAGING FORMATS TO CONVERSE WITH USERS'}
                textColor={'#435a64'}
              />
            </Item>
            <VirticleSpace height={25} />
            <Item align='center'>
              <IconGroupSection />
            </Item>
            <VirticleSpace height={50} />
            <Item align='center'>
              <SectionDescriptionCard
                Message={'ONE-STOP SOLUTION FOR ALL COMUNICATION:'}
              />
            </Item>
            <VirticleSpace height={50} />
            <Item align='center'>
              <LongIcons />
            </Item>
            <VirticleSpace height={25} />
            <Item align='center'>
              <SectionDescription
                Message={
                  "Don't miss out! Connect with Wisoft Solutions to Onboard Your business WhatsApp!"
                }
                widthFull={true}
                textColor={'#435a64'}
              />
            </Item>
            <VirticleSpace height={3} />
            <Item align='center' style={{ transform: ' translateY(13px)' }}>
              <ActionButton text={' Inquire Now'} />
            </Item>
          </Box>
        </Item>
        <Item align='center'>
          <Footer />
        </Item>
      </Email>
    </Box>
  );
};
export { Emailer };

// Convert the React component to an HTML email string
const emailHtml = renderToStaticMarkup(<Emailer />);
// const css = fs.readFileSync('../App.css', 'utf8');
const inlinedHtml = juice(emailHtml, css);
const $ = cheerio.load(inlinedHtml);
$('table').attr({
  align: 'center',
  style: 'background-color:#FFF;',
  cellpadding: '0',
  cellspacing: '0',
  border: '0',
  valign: 'top',
});

const fixedHtml = $.html();
console.log(fixedHtml);
console.log(css);
