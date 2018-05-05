import React from 'react';
import '../styles/app.css';
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import UsersTable from '../components/UsersTable';

const App = () => (
  <div>
    <Nav />
    <SearchInput />
    <UsersTable />
  </div>
)

export default App;
