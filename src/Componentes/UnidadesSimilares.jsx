import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ConjuntoUnidades from './ConjuntoUnidades'
import {connect} from 'react-redux'

/* class UnidadesSimilares extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            unidades: [],
            unid: []           
        }
    }    
    componentDidMount(){
       
        axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(resp => this.setState({
            unidades: resp.data.filter(u => u.tipo === this.props.tipo && u.id !== this.props.id),
            unid: resp.data
        }))       
       
    }
    render(){       

        return (
            this.state.unidades != [] ? (
                <ConjuntoUnidades unidades={this.state.unidades}/>
            )
            : (<ConjuntoUnidades unidades={this.state.unid}/>)
        )
    }
}
export default UnidadesSimilares */

const UnidadesSimiliares = (props) => {
    const [unidades,setUnid] = useState([])
    
    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(resp => setUnid(resp.data.filter(u => u.tipo === props.tipo && u.id !== props.id)))
    },[])

    return  <ConjuntoUnidades unidades={unidades}/>
}

/* const UnidadesSimiliares = ({id,tipo,unidades}) => <ConjuntoUnidades unidades={unidades}/>

const mapStateToProps = state => (
    {
        unidades: state.unidadesReducer.unidades.filter(u => u.tipo === 2)
    }
) */

/* export default connect(mapStateToProps,{})(UnidadesSimiliares) */
export default UnidadesSimiliares

//esto c probo en el componentDidMounth
 /* let actual = [] */
 /* actual = this.state.unidades
        actual = actual.filter(a => a.tipo === this.props.tipo && a.id !== this.props.id)
        this.setState({
            unid: actual    
        }) */
/* const {unidades} = this.state */