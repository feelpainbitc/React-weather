import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header';

function App() {
  return(
  <div className='container'>
    <Header/>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/month-statistics' exact Component={MonthStatistics}/>
    </Routes>
  </div>
  );
}

export default App;
