import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ConjuntoUnidades from './ConjuntoUnidades'
import {connect} from 'react-redux'

/* const PrimerasUnidades = ({id}) => {
    const [unidades,setUnid] = useState([])
    
    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(resp => setUnid(resp.data.filter(u => u.id <= 4))) 
    },[])

    return  <ConjuntoUnidades unidades={unidades}/>
} */ 

const PrimerasUnidades = ({unidades}) => <ConjuntoUnidades unidades={unidades}/>

const mapStateToProps = state => (
    {
        unidades: state.unidadesReducer.unidades.filter(u => u.id <= 4)
    }
)

 export default connect(mapStateToProps,{})(PrimerasUnidades)