import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Ads from "./components/Ads";

const App = () =>
{
  return (

      <div className="app-wrapper">
          <Header />
          <Menu />
          <Profile />
          <Footer />
          <Ads />
      </div>
  )
};

export default App;
