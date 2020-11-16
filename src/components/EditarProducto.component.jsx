import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';


const EditarProducto = () => {

    const [ producto, setProducto ] = useState({
        nombre : '',
        precio : '',
    })

    const history       = useHistory();
    const dispatch      = useDispatch();
    const productoEdit  = useSelector( state => state.productos.editProducto );
    const { nombre, precio  } = producto;

    useEffect(() => {
        setProducto(productoEdit);
    }, [productoEdit]);

    const onChangeForm = ( e ) => {
        setProducto({
            ...producto,
            [ e.target.name ] : e.target.value
        })
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch ( editarProductoAction( producto ) );
        history.push('/');
    }

    return ( 
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center mb-4 font-weight-bold">
                                Editar Producto
                            </h5>
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
                                        value = {nombre}
                                        onChange = { onChangeForm }
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Precio </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio del Producto"
                                        name="precio"
                                        value = { precio }
                                        onChange = { onChangeForm }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success font-weight-bold text-uppercase d-block w-100"
                                >
                                    Actualizar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default EditarProducto;