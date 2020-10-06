import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Example from '../src/components/Example';

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      
    >
      <App />
      <Example />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


