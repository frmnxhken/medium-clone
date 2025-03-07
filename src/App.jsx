import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import DetailPost from '@/pages/posts/DetailPost'
import PostLayout from '@/components/layouts/PostLayout'
import Search from '@/pages/Search'
import ScrollToTop from '@/utils/ScrollToTop'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/detail' element={<PostLayout/>}>
          <Route path='/detail' element={<DetailPost/>}/>
        </Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App