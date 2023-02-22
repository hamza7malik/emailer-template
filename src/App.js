import { Emailer } from './components/Emailer';
import { renderEmail } from 'react-html-email';
import './App.css';

function App() {
  return <Emailer />;
}

export default App;

const htmlContent = renderEmail(<App />);

console.log(htmlContent);
