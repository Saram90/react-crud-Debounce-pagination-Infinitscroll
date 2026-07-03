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

localStorage.setItem("app_version", "1.0.0");

console.log(
  "Stored version:",
  localStorage.getItem("app_version")
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
