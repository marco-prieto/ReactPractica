import React from 'react'
import Banner from '../Componentes/Banner'
import ConjuntoUnidades from '../Componentes/ConjuntoUnidades'
import PrimerasUnidades from '../Componentes/PrimerasUnidades'

const Inicio = () => (
    <>
        <Banner></Banner>
        <div className="ed-grid">
            <h1 className="center">Nuestras Promociones</h1>
            {/* <ConjuntoUnidades></ConjuntoUnidades> */}
            <PrimerasUnidades/>
        </div>
    </>
)
export default Inicio