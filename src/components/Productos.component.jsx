import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProductosAction } from '../actions/productoActions';
import Producto from './Producto.component';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getProductos = () => dispatch( getProductosAction() );
        getProductos();

    },[] );

    const productos = useSelector( state => state.productos.productos  );
    const error     = useSelector( state => state.productos.error );
    const loading   = useSelector( state => state.productos.loading)

    return ( 
        <Fragment>
            <h3 className="text-center my-5">Listado de Productos</h3>
                {
                    error ? 
                        <p className="font-weight-bold alert alert-danger text-center">
                            Hay un error, intentelo más tarde.
                        </p>
                    :
                        null
                }
                {
                    loading ? 
                        <p className="font-weight-bold  text-center">
                            Cargando...
                        </p>
                    :
                        null
                }
            <table className="table table-striped">
               <thead className="bg-primary table-info">
                    <tr>
                        <th scope="col"> Nombre</th>
                        <th scope="col"> Precio</th>
                        <th scope="col"> </th>
                    </tr>
               </thead>
               <tbody>
                {
                    productos.length === 0 ? 
                       'No hay productos'
                    :
                    productos.map( producto => (
                        <Producto
                            key         = { producto.id }
                            producto    = { producto }
                        />
                    ))
                }
               </tbody>
           </table>
        </Fragment>
     );
}
 
export default Productos;