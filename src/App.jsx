import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import DetailPost from '@/pages/posts/DetailPost'
import PostLayout from '@/components/layouts/PostLayout'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/detail' element={<PostLayout/>}>
          <Route path='/detail' element={<DetailPost/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App