import React from 'react'
import Banner from '../Componentes/Banner'
import Unidades from '../Componentes/Unidades'
import ConjuntoUnidades from '../Componentes/ConjuntoUnidades'

const Inicio = () => (
    <>
        <Banner></Banner>
        <div className="ed-grid">
            <h1 className="center">Nuestras Promociones</h1>
            <ConjuntoUnidades></ConjuntoUnidades>
        </div>
    </>
)
export default Inicio