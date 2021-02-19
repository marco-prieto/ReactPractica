import axios from 'axios'
import { ADD_TO_CART, DELETE_FROM_CART, GET_UNIDADES_LIST } from './actions'

const addToCart = id => (
    {
        type: ADD_TO_CART,
        id
    }
)
const deleteFromCart = id => (
    {
        type: DELETE_FROM_CART,
        id
    }
)

const getUnidadesList = () => dispatch => {
    axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/unid').then(response => {
        return dispatch(
            {
                type: GET_UNIDADES_LIST,
                unidades: response.data
            }
        )
    })
}

export {addToCart,deleteFromCart,getUnidadesList}