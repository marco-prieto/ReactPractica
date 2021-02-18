import React from 'react'
import axios from 'axios'
import ConjuntoUnidades from './ConjuntoUnidades'

class Unidades extends React.Component {
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
}
export default Unidades