import React, {useState,useEffect} from 'react'
import CardUnidades from './CardUnidades'
import axios from 'axios'


const ConjuntoUnidades = ({unidades}) => (
    <div className="ed-grid m-grid-4">
                {
                    
                    unidades.map(u => 
                        <CardUnidades
                        key={u.id}
                        id={u.id}
                        titulo={u.titulo}
                        imagen={u.imagen}
                        precio={u.precio}
                        descripcion={u.descripcion}
                        />            
                    )
                }
    </div>
)

export default ConjuntoUnidades