import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Post from './components/Post'

const Routes = () => (
  <BrowserRouter>
    <div>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        {/* <Route path="/p/:page" component={Home} /> */}
        <Route path="/post" component={Post} />
        {/* <Route path="/post/:slug" component={Post} /> */}
    </div>
  </BrowserRouter>
)

export default Routes
