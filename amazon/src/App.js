import './css/App.css';
import Header from './components/Header';
import Menu from './components/Menu'
import Home from "./pages/Home";
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Drawer from './components/Drawer';
import React,{useState} from 'react'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Cart from './pages/Cart';
import EmptyCart from './pages/EmptyCart'
import { useContextValue } from './ContextProvider';
import Signin from './pages/Signin';
import Register from './pages/Register';

function App() {
  const [open, setOpen] = useState(false)
  const {cartTotal}=useContextValue()

  const controlDrawer=()=>{
    setOpen(!open)
  }

  return (
    <div className="app">    
      <Router>
        <Switch>
          <Route key={'2'} path="/signin/" exact>
            <Signin/>
          </Route>
          <Route key={'2'} path="/register/" exact>
            <Register/>
          </Route>
          <Route key={'1'} path="/">
            <div className="app__header">
              <Drawer controlDrawer={controlDrawer} open={open}/>   
              <Header/>
              <Menu controlDrawer={controlDrawer}/>
            </div>
            <Switch>    
              <Route key={'1'} path="/product/:proid/" exact>
                <ProductDetail  />
              </Route>
              <Route key={'2'} path="/products/:catid/" exact>
                <Products  />
              </Route>
              <Route key={'3'} path="/products/:catid/:subid/" exact>
                <Products />
              </Route>
              <Route key={'4'} path="/cart/" exact>
                {cartTotal==0?<EmptyCart/>:<Cart/>}
              </Route>
              <Route key={'5'} path="/" exact>
                <Home/>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
