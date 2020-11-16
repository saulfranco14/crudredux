import React  from 'react';
import Header from "./components/Header.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from "./components/Productos.component";
import NuevoProducto from "./components/NuevoProducto.component";
import EditarProducto from "./components/EditarProducto.component";
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header
        
        />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
