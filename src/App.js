import React from 'react';
import NavbarComponent from './components/Navbar';
import {ProductsPage} from './pages/ProductsPage';
import { HomePage } from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="custom-background">
      <NavbarComponent />
      <HomePage />
      <ProductsPage />
    </div>
  );
}

export default App;
