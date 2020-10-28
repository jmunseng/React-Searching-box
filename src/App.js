import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header'
function App() {
  const [searchTerm, setSearchTearm] = useState('')
  const onSearchChange = (e)=>{
    setSearchTearm(e.target.value)
  }


  return (
    <div>
      <Header
        text='Staff List'
      />
      <div className='header-div'>
        <input
          type='text'
          placeholder='search staff'
          onChange={onSearchChange}
          // value = {searchTerm}
        />


      </div>

      <CardList 
        searchStaff = {searchTerm}
      />
    </div>
  );
}

export default App;
