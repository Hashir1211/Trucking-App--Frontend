import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/login/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./pages/create/Create"
import {Post} from './pages/post/Post'
import {Service} from './pages/services/Service'
import {Qoute} from './pages/qoute/Qoute'


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create/blog' component={Create} />
          <Route exact path ='/blog' component={Post}/>
          <Route exact path ='/services' component={Service}/>
          <Route exact path ='/qoute' component={Qoute}/>   
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
