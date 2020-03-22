import React from 'react';
import PhoneBookPage from './pages/PhoneBookPage';
import ThemeContext from './context/ThemeContext';
import Layout from './components/Layout/Layout';

const App = () => (
  <ThemeContext>
    <Layout>
      <PhoneBookPage />
    </Layout>
  </ThemeContext>
);
export default App;
