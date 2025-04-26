
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Initializing application...');

try {
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
