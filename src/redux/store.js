import {applyMiddleware, combineReducers,createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ADD_TO_CART, DELETE_FROM_CART, GET_UNIDADES_LIST } from './actions'

const initialStore = {
    cart: []
}

const initialUnidades = {
    unidades: []
}

const cartReducer = (state = initialStore,{id,type}) => {
    
    if(type === ADD_TO_CART){
        if(state.cart.find(a => a === id)) return state
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if(type === DELETE_FROM_CART){
        return {
            ...state,
            cart:state.cart.filter(c => c !== id)
        }
    }

    return state
}

const unidadesReducer = (state = initialUnidades,action) => {
    if (action.type === GET_UNIDADES_LIST){
        return{
            ...state,
            unidades: action.unidades
        }
    }
    return state
}

export default createStore(combineReducers({cartReducer,unidadesReducer}),composeWithDevTools(applyMiddleware(thunk)))