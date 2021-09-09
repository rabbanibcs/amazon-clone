import './css/App.css';
import Header from './Header';
import Menu from './Menu'
import Home from "./Home";
import Products from './Products';
import ProductDetail from './ProductDetail';
import Drawer from './Drawer';
import React,{useState} from 'react'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Cart from './Cart';
import EmptyCart from './EmptyCart'
import { useContextValue } from './ContextProvider';
import Signin from './Signin';
import Register from './Register';

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
