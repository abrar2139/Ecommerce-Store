import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import {store} from './app/store.jsx'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <ToastContainer/>
  <Navbar/>
 <App/>
  <Footer/>
  </BrowserRouter>
  </Provider>,
)
