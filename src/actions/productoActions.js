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
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import clientAxios from '../config/axios';

export function nuevoProductoAction( producto ){
    return async( dispatch ) => {
        dispatch( agregarProducto( ) );

        try {
            await clienteAxios.post('/productos',producto);
            dispatch( agregarProductoExito( producto ) );
            Swal.fire({
                icon: 'success',
                title: 'Se creó el producto exitosamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'El producto no se pudo crear',
                Text: 'Vuelva a intentarlo más tarde',
            });
            dispatch( agregarProductoError( true ) )
        }
    }
}

const agregarProducto = () => ({
    type    : AGREGAR_PRODUCTO,
    payload : true,
});

const agregarProductoExito = ( producto ) => ({
    type    : AGREGAR_PRODUCTO_EXITO,
    payload : producto
});

const agregarProductoError = ( error ) => ({
    type    : AGREGAR_PRODUCTO_ERROR, 
    payload : error
})

export function getProductosAction(){
    return async ( dispatch ) => {
        dispatch( getProductos() );

        try {
            const response = await clientAxios.get('/productos');
            dispatch( getProductoExitoso(response.data) )
        } catch (error) {
            dispatch( getProductoError());
        }
    }
};

const getProductos = () => ({
    type    : GET_PRODUCTOS,
    payload : true,
});

const getProductoExitoso = ( productos ) =>({
    type    : GET_PRODUCTOS_EXITO,
    payload : productos,
})
const getProductoError = (  ) =>({
    type    : GET_PRODUCTOS_ERROR,
    payload : true,
})


export function deleteProductoAction( id ) {
    return async ( dispatch ) => {
        dispatch( deleteProducto( id ) );
        
        try {
            await clientAxios.delete(`/productos/${id}`);
            dispatch( deleteProductoExitoso() );
            Swal.fire(
                'Eliminado!',
                `Tu producto con el id: ${id} ha sido eliminado`,
                'success'
            )
        } catch (error) {
            dispatch( deleteProductoError() );
        }
    }
}

const deleteProducto = ( id ) => ({
    type    : DELETE_PRODUCTO,
    payload : id
});

const deleteProductoExitoso = () =>({
    type    : DELETE_PRODUCTO_EXITO,
})

const deleteProductoError = () => ({
    type    : DELETE_PRODUCTO_ERROR,
    payload : true,
})

export function editProductoAction( producto ){
    return ( dispatch ) => {
        dispatch( editProducto( producto ) );
    }
}

const editProducto = ( producto ) => ({
    type: EDITAR_PRODUCTO,
    payload : producto
})

export function editarProductoAction( producto ){
    return async( dispatch ) => {
        dispatch( editarProducto( producto ) )
        try {
            await clientAxios.put(`/productos/${producto.id}`, producto);
            dispatch( editarProductoExito( producto ) );
            Swal.fire(
                'Actualizado!',
                `Tu producto:  ${producto.nombre} ha sido actualizado`,
                'success'
            )
        } catch (error) {
            dispatch( editarProductoError(  ) );
            Swal.fire({
                icon: 'error',
                title: 'El producto no se pudo actualizar',
                Text: 'Vuelva a intentarlo más tarde',
            });
        }
    }
}

const editarProducto = (  ) => ({
    type    : EDIT_PRODUCTO_START
});

const editarProductoExito = ( producto ) => ({
    type    : EDITAR_PRODUCTO_EXITO,
    payload : producto 
})

const editarProductoError = (  ) => ({
    type    : EDITAR_PRODUCTO_ERROR, 
    payload : true
})

