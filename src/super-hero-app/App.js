import React from 'react';
import './App.css';
import Header from './Header';
import SideBarLeft from './SideBarLeft';
import SideBarRight from './SideBarRight';
import MainContent from './MainContent';

function App() {
  return (
    <>
      <Header></Header>
      <div className="content-page">
        <MainContent></MainContent>
        <SideBarLeft></SideBarLeft>
        <SideBarRight></SideBarRight>
      </div>
    </>
  );
}

export default App;
