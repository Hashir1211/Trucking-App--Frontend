import React, { useEffect } from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/login/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import {Post} from './pages/post/Post'
import {Service} from './pages/services/Service'
import {Qoute} from './pages/qoute/Qoute'
import { NotFound } from "./pages/404/NotFound"
import {Auth} from "./components/Auth/Auth"
import './config/axios'
import {AllBlog} from './components/Employee/Blog/AllBlog'
import {AddBlog} from './components/Employee/Blog/AddBlog'
import { EditBlog } from "./components/Employee/Blog/EditBlog"
import { AllTickets } from "./components/Employee/Ticket/AllTicket"
import { AddTicket } from "./components/Employee/Ticket/AddTicket"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./redux/slice/postSlice"
import { AllQoute } from "./components/Employee/Qoute/AllQoute"

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch= useDispatch()
  useEffect(() => {
  
      dispatch(fetchPosts())

  }, [])
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path ='/blog' component={Post}/>
          <Route exact path ='/services' component={Service}/>
          <Route exact path ='/quote' component={Qoute}/>   


          <Route exact path ='/manage/post' render={(props) => <Auth {...props} childComponent={AllBlog} />}/>
          <Route exact path ='/create/post' render={(props) => <Auth {...props} childComponent={AddBlog} />}/>
          <Route exact path ='/edit/post/:id' render={(props) => <Auth {...props} childComponent={EditBlog} />}/>

          <Route exact path ='/manage/ticket' render={(props) => <Auth {...props} childComponent={AllTickets} />}/>
          <Route exact path ='/create/ticket' render={(props) => <Auth {...props} childComponent={AddTicket} />}/>

          <Route exact path ='/manage/qoute' render={(props) => <Auth {...props} childComponent={AllQoute} />}/>



          <Route path ='*' component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
