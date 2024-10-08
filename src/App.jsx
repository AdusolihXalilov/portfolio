import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
