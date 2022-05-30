import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainComponent from './components/MainComponent';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
render() {
  return (
    <BrowserRouter>
    <div className="App">  
         <MainComponent/>
  </div>
  </BrowserRouter>

  );
}
}

export default App;
