import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
} from '../types/index';


export function mostrarAlertaActions( alerta ){
    return ( dispatch ) => {
        dispatch( mostrarAlerta( alerta ))
    }
}

const mostrarAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export function ocultarAlertaActions(  ){
    return ( dispatch ) => {
        dispatch( ocultarAlerta(  ) )
    }
}

const ocultarAlerta = (  ) => ({
    type: OCULTAR_ALERTA,
    payload: false
})