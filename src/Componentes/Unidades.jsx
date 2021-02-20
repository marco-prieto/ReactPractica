import React from 'react'
import axios from 'axios'
import ConjuntoUnidades from './ConjuntoUnidades'
import {connect} from 'react-redux'

/* class Unidades extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            unidades: []
        }
    }
    
    componentDidMount(){
        axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(resp => this.setState({
            unidades: resp.data            
        }))
    }

    render(){
        const {unidades} = this.state
        return <ConjuntoUnidades unidades={unidades}/>
    }
} */

const Unidades = ({unidades}) => <ConjuntoUnidades unidades={unidades}/>

const mapStateToProps = state => (
    {
        unidades: state.unidadesReducer.unidades
    }
)

export default connect(mapStateToProps,{})(Unidades)