
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Initializing application...');

// Preload important assets
const preloadAssets = () => {
  const logoSrc = "./lovable-uploads/aff7e86f-c0f9-49a9-bdb8-7f1dff8f6753.png";
  const preloadLogo = new Image();
  preloadLogo.src = logoSrc;
  console.log('Preloading logo and critical assets');
};

try {
  // Preload critical assets
  preloadAssets();
  
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error('Root element not found in the DOM');
  } else {
    console.log('Root element found, mounting React app');
    createRoot(rootElement).render(<App />);
    console.log('React app mounted successfully');
  }
} catch (error) {
  console.error('Failed to initialize application:', error);
}
