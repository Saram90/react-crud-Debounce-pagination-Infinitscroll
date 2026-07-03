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

  if (browserVersion !== data.version) {

    console.log('Version mismatch detected');

    localStorage.setItem(
      'app_version',
      data.version
    );

    window.location.reload();
  }
}

checkVersion();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)