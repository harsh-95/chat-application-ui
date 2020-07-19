import React from 'react';
import './App.css';
import SidebarMain from './components/SidebarMain/SidebarMain';
import ChatAreaMain from './components/ChatAreaMain/ChatAreaMain';

function App() {
  return (
    <div className="App">
      <div className="mainContainerDiv">
        <SidebarMain />
        <ChatAreaMain />
      </div>
    </div>
  );
}

export default App;
