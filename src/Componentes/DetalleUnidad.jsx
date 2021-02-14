import React from 'react'
import ConjuntoUnidades from './ConjuntoUnidades'

const unid  = [
    {
        id: 1,
        titulo : "Chocolates con fresas",
        descripcion: "Deliciosos chocolates obtenidos del cacao mas exquisito que existe en este planeta importados del Grecia",
        imagen : "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 75

    },
    {
        id: 2,
        titulo : "Tigre de peluche",
        descripcion: "Deliciosos chocolates obtenidos del cacao mas exquisito que existe en este planeta importados del Grecia",
        imagen : "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 100

    },
    {
        id: 3,
        titulo : "Oso de peluche",
        descripcion: "Deliciosos chocolates obtenidos del cacao mas exquisito que existe en este planeta importados del Grecia",
        imagen : "https://images.pexels.com/photos/158109/kodiak-brown-bear-adult-portrait-wildlife-158109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        precio: 50

    },
    {
        id: 4,
        titulo : "Globo Corazon",
        descripcion: "Deliciosos chocolates obtenidos del cacao mas exquisito que existe en este planeta importados del Grecia",
        imagen : "https://images.unsplash.com/photo-1519600728514-fb288e00037f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        precio: 80

    },
]
const DetalleUnidad = ({match}) => {
    const unidActual = unid.filter(u => u.id === parseInt(match.params.id))[0]

    return (
        unidActual ? (
            <>
            <br></br>
            <br></br>
            <br></br>
            <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
                <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left ">
                    <img className="m-cols-1 s-radius-1" src={unidActual.imagen}/>
                </div>
                <div className="ed-grid">
                                        
                    <br></br>
                    <h1>{unidActual.titulo}</h1>
                    <h3>Detalle del producto</h3>                   
                    <p>{unidActual.descripcion}</p>
                    <br></br>
                    <h4>Precio: S/.{unidActual.precio}</h4>
                    <button className="button">Comprar  </button>
                </div>
            </div>
            <br/>
            <br/>
            <div className="ed-grid">
                <h2 className="center">Tambien te puede interesar</h2>
                <ConjuntoUnidades></ConjuntoUnidades>
            </div>
            </>
        ) :
        (
            <div>
                <h1>Error: No existe tal pagina</h1>
            </div>
        )
    )
}

export default DetalleUnidad