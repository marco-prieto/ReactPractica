import React from 'react'

const Banner = () => (
    <section className="l-section s-py-4">
        {/* <!-- Separación del contenido en columnas --> */}
        <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
            {/* <!-- Contenido de la columna 1 --> */}
            <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
            <h1>Girasol Considerado</h1>
            <p>Pensamos en ayudarte a sorprender a la persona que mas quieres</p>
            {/* <!-- Botones --> */}
            <div className="s-main-center">
                <a className="button s-mr-2 s-mb-2 m-mb-0">Escribenos</a>
                <a className="button s-mb-2 m-mb-0">Promociones</a>
            </div>
            </div>
            {/* <!-- Contenido de la columna 2 --> */}
            <div>
            <div className="img-container s-ratio-16-9">
                <img className="s-radius-1" src="https://images.pexels.com/photos/870866/pexels-photo-870866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>  
            </div>
            </div>
        </div>
    </section>
)
export default Banner