import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function checkVersion() {

  const response = await fetch('/version.json', {
    cache: 'no-store',
  });

  const data = await response.json();

  const browserVersion =
    localStorage.getItem('app_version');

  console.log('Server:', data.version);
  console.log('Browser:', browserVersion);

  // 👇 PUT THE CODE HERE
  if (browserVersion !== data.version) {

    localStorage.setItem(
      'app_version',
      data.version
    );

    window.location.href =
      window.location.pathname +
      '?v=' +
      Date.now();

    return;
  }
}

checkVersion();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)