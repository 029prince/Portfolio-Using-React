import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Myworks from './components/mywork/Mywork'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
