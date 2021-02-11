import logo from './logo.svg';
import './App.css';
import './Styles/styles.scss'
import React,{Fragment} from 'react'
import Menu from './Componentes/Menu'
import Banner from './Componentes/Banner'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Unidades from './Componentes/Unidades'
import Inicio from './Paginas/Inicio'

function App() {
  return (
    <Router>      
      <Menu/>
      <Switch>
        <Route path="/" exact component={Inicio}/>          
      </Switch>
    </Router>
  )
}

export default App;
