import React from 'react'
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Roadmaps from './components/Roadmaps/Roadmaps';

const App = () => {
  return (
    <div className='w-screen'>
      <Navbar/>
      <Hero/>
      <Roadmaps/>
    </div>
  )
}

export default App
