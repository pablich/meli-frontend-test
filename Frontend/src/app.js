import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import './styles/index.scss';

const App = () => (
  <div className="container">
    <Header />
    <main role="main">
      <div className="ml-content">
        <Routes />
      </div>
    </main>
  </div>
);

export default App;
