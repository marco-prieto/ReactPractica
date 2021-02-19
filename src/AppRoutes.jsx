import logo from './logo.svg';
import './App.css';
import './Styles/styles.scss'
import React,{Fragment} from 'react'
import Menu from './Componentes/Menu'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import QuienesSomos from './Paginas/QuienesSomos'
import Promociones from './Paginas/Promociones'
import Contacto from './Paginas/Contacto'
import DetalleUnidad from './Componentes/DetalleUnidad'

const AppRoutes = () => (
    <Router>      
      <Menu/>
      <Switch>
        <Route path="/" exact component={Inicio}/>   
        <Route path="/nosotros" exact component={QuienesSomos}/>   
        {/* recuerda el promociones id antes de promociones */}
        <Route path="/promociones/:id" component={DetalleUnidad}/>       
        <Route path="/promociones" exact component={Promociones}/>   
        <Route path="/contacto" exact component={Contacto}/>   
      </Switch>
    </Router>
)
export default AppRoutes