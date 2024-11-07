import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import App from './App.jsx';
import './index.css';
import { UserProvider } from './assets/pages/UserContext.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
