import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    GET_PRODUCTOS,
    GET_PRODUCTOS_EXITO,
    GET_PRODUCTOS_ERROR,
    DELETE_PRODUCTO,
    DELETE_PRODUCTO_EXITO,
    DELETE_PRODUCTO_ERROR,
    EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR,
    EDIT_PRODUCTO_START,
} from '../types';


const initialState = {
    productos       : [],
    error           : false,
    loading         : false,
    deleteProducto  : false,
    editProducto    : false,
}

export default function( state = initialState, action){
    switch (action.type) {

        case GET_PRODUCTOS: 
        case AGREGAR_PRODUCTO : 
            return{
                ...state,
                loading: action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading     : false,
                productos   : [...state.productos, action.payload],
            }
        
        case EDITAR_PRODUCTO_ERROR:
        case DELETE_PRODUCTO_ERROR:
        case GET_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR :
            return {
                ...state,
                loading : false,
                error   : action.payload,
            }
        case GET_PRODUCTOS_EXITO:
            return{
                ...state,
                loading : false,
                error   : false,
                productos : action.payload
            }
        
        case DELETE_PRODUCTO : 
            return{
                ...state,
                deleteProducto : action.payload,
            }

        case DELETE_PRODUCTO_EXITO : 
            return{
                ...state,
                productos       : state.productos.filter( producto => producto.id !== state.deleteProducto ),
                deleteProducto  : false
            }
        case EDITAR_PRODUCTO : 
            return{
                ...state,
                editProducto : action.payload
            }
        
        case EDITAR_PRODUCTO_EXITO :
            return{
                ...state,
                editProducto : false,
                productos: state.productos.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto       
                )
            }
        
        default:
            return state;
    }
}