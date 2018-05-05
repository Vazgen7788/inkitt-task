import React from 'react';
import '../styles/app.css';
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import UsersTableContainer from './UsersTableContainer';

const App = () => (
  <div>
    <Nav />
    <SearchInput />
    <UsersTableContainer />
  </div>
)

export default App;
