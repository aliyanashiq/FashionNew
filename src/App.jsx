import React from 'react'
import Header from './Components/Header'
import F1 from './Components/F1'
import { DataProvider } from './DataContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import MainComponent from './Components/MainComponent'
import Shop from './Shop/Shop'

function App() {
  return (
    <DataProvider>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </DataProvider>
  )
}

export default App