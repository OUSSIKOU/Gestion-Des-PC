import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Renseignements from './component/renseignement/Renseignements';
import { Provider } from './component/context';
import AddRens from './component/renseignement/AddRens';
import About from './component/pages/About';
import Image from './component/pages/Image';
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
  <Navbar/>
  <Image/>
     <Routes>
     <Route exact path='/About' element={<About />}></Route>
       <Route exact path='/Rens' element={<Renseignements />}></Route>
       <Route exact path='/Rens/add' element={<AddRens />}></Route>
     </Routes>
     </Router>
      </Provider>
    )
  }
}
