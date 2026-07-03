import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function checkVersion() {

  const response = await fetch(
    "/version.json?t=" + Date.now(),
    { cache: "no-store" }
  );

  const data = await response.json();

  const currentVersion =
    localStorage.getItem("app_version");

  if (!currentVersion) {

    localStorage.setItem(
      "app_version",
      data.version
    );

    return;
  }
}

checkVersion();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
