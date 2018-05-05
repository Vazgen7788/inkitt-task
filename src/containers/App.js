import React from 'react';
import '../styles/app.css';
import Nav from '../components/Nav';
import UsersSearchInputContainer from './UsersSearchInputContainer';
import UsersTableContainer from './UsersTableContainer';

const App = () => (
  <div>
    <Nav />
    <UsersSearchInputContainer />
    <UsersTableContainer />
  </div>
)

export default App;
