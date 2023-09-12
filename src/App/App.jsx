import React from 'react'
import FlexW1G from './components/layout/FlexW1G/FlexW1G'
import FlexH3G from './components/layout/FlexH3G/FlexH3G'
import Footer from './components/ui/Footer/Footer'
import Navbar from './components/ui/Navbar/Navbar'
import Header from './components/ui/Header/Header'
import MemeForm from './components/MemeForm/MemeForm'

const App = () => {
  return (
    <div className='App'>
      <FlexH3G>
        <Header></Header>
        <Navbar></Navbar>
        <FlexW1G>
          <div>Viewer</div>
          <MemeForm></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>
  )
}

export default App