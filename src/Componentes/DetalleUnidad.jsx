import React, {useState,useEffect} from 'react'
import ConjuntoUnidades from './ConjuntoUnidades'
import axios from 'axios'
import UnidadesSimilares from './UnidadesSimilares'


const DetalleUnidad = ({match}) => {
    const [unid,setUnid] = useState({})

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/marco-prieto/json-db/unid/${match.params.id}`).then(resp => setUnid(resp.data))
    },[])

    return (
        unid ? (
            <>
            <br></br>
            <br></br>
            <br></br>
            <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
                <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left ">
                    <img width="800px" height="500px" className="m-cols-1 s-radius-1" src={unid.imagen}/>
                </div>
                <div className="ed-grid">
                                        
                    <br></br>
                    <h1>{unid.titulo}</h1>
                    <h3>Detalle del producto</h3>                   
                    <p>{unid.descripcion}</p>
                    <br></br>
                    <h4>Precio: S/.{unid.precio}</h4>
                    <button className="button">Comprar  </button>
                </div>
            </div>
            <br/>
            <br/>
            <div className="ed-grid">
                <h2 className="center">Tambien te puede interesar</h2>
                <UnidadesSimilares tipo={unid.tipo} id={unid.id}/>
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

/* class DetalleUnidad extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            unidad: {}
        }
    }

    componentDidMount(){
        axios.get(`http://my-json-server.typicode.com/marco-prieto/json-db/unid/${this.props.match.params.id}`).then(resp => this.setState({
            unidad: resp.data       
        }))
    }

    render(){
        return (
            this.state.unidad ? (
                <>
                <br></br>
                <br></br>
                <br></br>
                <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
                    <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left ">
                        <img className="m-cols-1 s-radius-1" src={this.state.unidad.imagen}/>
                    </div>
                    <div className="ed-grid">
                                            
                        <br></br>
                        <h1>{this.state.unidad.titulo}</h1>
                        <h3>Detalle del producto</h3>                   
                        <p>{this.state.unidad.descripcion}</p>
                        <br></br>
                        <h4>Precio: S/.{this.state.unidad.precio}</h4>
                        <button className="button">Comprar  </button>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="ed-grid">
                    <h2 className="center">Tambien te puede interesar</h2>
                    <UnidadesSimilares tipo={this.state.unidad.tipo} id={this.state.unidad.id}/>
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
} */

export default DetalleUnidad