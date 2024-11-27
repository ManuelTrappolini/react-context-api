

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './pages/DefaultLayout'
import Home from './pages/Home'
import PostsPage from './pages/Posts'
import About from './pages/AboutUs'
import SinglePostPage from './pages/SinglePostPage'
import NotFound from './pages/NotFoundPage'





function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/posts/:id' element={<SinglePostPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App