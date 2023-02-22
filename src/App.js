import { Emailer } from './components/Emailer';
import { renderEmail } from 'react-html-email';
import './App.css';

function App() {
  return (
    <Emailer
      preheaderText={
        'WhatsApp for Business Solutions - Personalized user experience, convenience, and care anytime, anywhere! Inquire now to know more about the future of customer care with wider reach, enhanced engagement, evolving preferences, social media connection, and unmatched features.'
      }
    />
  );
}

export default App;
