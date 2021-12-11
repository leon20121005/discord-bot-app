import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import './Dashboard.scss';

function App() {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Overview />
    </div>
  );
}

export default App;
