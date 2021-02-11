import React from 'react'
import Unidades from './Unidades'

const unid  = [
    {
        id: 1,
        titulo : "Chocolates con fresas",
        imagen : "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 75

    },
    {
        id: 2,
        titulo : "Tigre de peluche",
        imagen : "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 100

    },
    {
        id: 3,
        titulo : "Oso de peluche",
        imagen : "https://images.pexels.com/photos/158109/kodiak-brown-bear-adult-portrait-wildlife-158109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 50

    },
    {
        id: 4,
        titulo : "Globo Corazon",
        imagen : "https://images.unsplash.com/photo-1519600728514-fb288e00037f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        precio: 80

    },
]
const ConjuntoUnidades = () => (
    <div className="ed-grid m-grid-4">
        {
            unid.map(u => 
                <Unidades
                key={u.id}
                id={u.id}
                titulo={u.titulo}
                imagen={u.imagen}
                precio={u.precio}
                />            
            )
        }
    </div>
)
export default ConjuntoUnidades