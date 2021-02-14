import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Unidades = (props) => (
    <article className="s-shadow-bottom">
    {/* <!--Contenedor de la imagen--> */}
    <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <Link to={`/promociones/${props.id}`}>
            <img src={props.imagen}/>
        </Link>
    </div>
    {/* <!--Contenido--> */}
    <div className="s-bg-white s-pxy-2">
        <h3>{props.titulo}</h3>
        <p className="s-mb-0">{props.descripcion}</p>
    </div>
    <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        {/* <!--Define el ancho máximo de la imagen--> */}
        <div className="s-10 s-mr-1">
        {/* <!--Contenedor de la imagen--> */}
        
        {/* <!--Profesor--> */}
        </div>
        <h4 className="s-mb-0">Precio</h4>
        {/* <!--Boton--> */}
        <div className="button s-to-right">S/. {props.precio}</div>
    </footer>
</article>
)
export default Unidades

//En este caso no sirve los propTypes solo pa repasar
Unidades.propTypes = {
    titulo: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,    
}

Unidades.defaultProps = {
    titulo: "Sin Titulo",
    imagen: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    precio: 100,
}