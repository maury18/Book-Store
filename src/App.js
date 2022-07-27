import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import NavBar from './components/navBar';
import Books from './components/books';

const App = () => (
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<Books />} />
      </Routes>
    </Router>
  </>
);

export default App;
