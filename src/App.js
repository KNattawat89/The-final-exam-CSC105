import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainComponent from './components/MainComponent';
import { Component } from 'react';
class App extends Component {
 constructor(props){
   super(props);
   this.state= {
   
   }
 }
render() {
  return (
    <div className="App">
     <MainComponent/>
  </div>

  );
}
}

export default App;
