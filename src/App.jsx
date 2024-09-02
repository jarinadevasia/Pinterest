import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ViewImages from './pages/ViewImages'
import Explore from './pages/Explore'
import CreateImage from './pages/CreateImage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/viewimages' element={<ViewImages />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/createimage' element={<CreateImage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
