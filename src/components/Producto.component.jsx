import React, { Fragment } from 'react'
import {  useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductoAction, editProductoAction } from '../actions/productoActions';
import Swal from 'sweetalert2';



const Producto = ( { producto } ) => {

    const { id, nombre, precio }    = producto;
    const dispatch                  = useDispatch();
    const history                   = useHistory();
    
    const eliminarProducto = ( id ) => {

        Swal.fire({
            title: '¿Estás seguro de eliminar el producto?',
            text: "no podrás regresar el producto eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText : 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch( deleteProductoAction( id ) );
            }
          })
    }

    const redirectProducto = ( producto ) => {
        dispatch( editProductoAction( producto ) );
        history.push(`/productos/editar/${producto.id}`)
    }

    return ( 
        <Fragment>
            <tr>
                <td>
                    { nombre }
                </td>
                <td>
                    <span className="font-weight-bold"> 
                        $ { precio }
                    </span>
                </td>
                <td className="accciones">
                    <button 
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick= { () => redirectProducto( producto ) }
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick = { () => eliminarProducto( id ) }
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </Fragment>
     );
}
 
export default Producto;