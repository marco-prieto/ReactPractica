import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ConjuntoUnidades from './ConjuntoUnidades'

const PrimerasUnidades = ({id}) => {
    const [unidades,setUnid] = useState([])
    
    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(resp => setUnid(resp.data.filter(u => u.id <= 4))) 
    },[])

    return  <ConjuntoUnidades unidades={unidades}/>
} 

 export default PrimerasUnidades