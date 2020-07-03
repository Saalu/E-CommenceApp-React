import React, { Component , Fragment } from 'react'
import {Switch,Route ,BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        <Navbar/>
        <Switch>       
          <Route path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route  component={Default} />
        </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
