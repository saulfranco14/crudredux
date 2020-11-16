import React, { Fragment, useState }    from 'react';
import { useDispatch, useSelector }     from 'react-redux';
import { nuevoProductoAction }          from '../actions/productoActions';
import { mostrarAlertaActions, ocultarAlertaActions }          from '../actions/alertaActions';

const NuevoProducto = ( { history } ) => {

    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState('' );

    const dispatch          = useDispatch();
    const loading = useSelector( state => state.productos.loading);
    const error = useSelector( state => state.productos.error);
    const alerta = useSelector( state => state.alerta.alerta );
    const agregarProducto   = ( producto ) => dispatch( nuevoProductoAction( producto ) );
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        if(nombre.trim === '' || precio <= 0 ){
            const alerta = {
                mensaje : 'Ambos campos son obligatorios',
                classes : 'alert alert-danger text-center p3'
            }
            dispatch( mostrarAlertaActions( alerta ) ) 

            return;
        } 

        dispatch( ocultarAlertaActions( ) );

        agregarProducto({
            nombre,
            precio,
        });
        history.push('/');
    }

    return ( 
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center mb-4 font-weight-bold">
                                Nuevo Producto
                            </h5>
                            {
                                alerta ?
                                   <p className={alerta.classes}>
                                       { alerta.mensaje }
                                   </p>
                                : 
                                null
                            }
                            <form
                                onSubmit={ handleSubmit }
                            >
                                <div className="form-group">
                                    <label> Nombre </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre del Producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={ e => setNombre( e.target.value ) }
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Precio </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio del Producto"
                                        name="precio"
                                        value={precio}
                                        onChange={ e => setPrecio( Number( e.target.value ) ) }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success font-weight-bold text-uppercase d-block w-100"
                                >
                                    Agregar
                                </button>
                            </form>
                            { loading ? <p className="alert alert-info p2 mt-3 text-center">Cargando...</p>  : null}
                            { error ? <p className="alert alert-danger p2 mt-3 text-center">Hubo un error</p>  : null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default NuevoProducto;