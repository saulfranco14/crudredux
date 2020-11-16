import { combineReducers} from  'redux';
import productoReducers from './productosReducer';
import alertaReducers from './alertaReducer';

export default combineReducers({
    productos : productoReducers,
    alerta : alertaReducers,
});