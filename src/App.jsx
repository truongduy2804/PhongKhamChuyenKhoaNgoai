import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import PolypHauMon from './pages/PolypHauMon.jsx';
import TriNoi from './pages/TriNoi.jsx';
import TriNgoai from './pages/TriNgoai.jsx';
import NutKeHauMon from './pages/NutKeHauMon.jsx';
import RoHauMon from './pages/RoHauMon.jsx';
import TriHonnHop from './pages/TriHonnHop.jsx';
import ApXeHauMon from './pages/ApXeHauMon.jsx';
import BenhTri from './pages/BenhTri.jsx';
import GioiThieu from './pages/GioiThieu.jsx';
import ToolBarMenu from './components/ToolBarMenu.jsx';
import Footer from './components/Footer.jsx';
import { Box, Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ToolBarMenu />
        <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/polyp-hau-mon" element={<PolypHauMon/>} />
              <Route path="/tri-noi" element={<TriNoi/>} />
              <Route path="/tri-ngoai" element={<TriNgoai />} />
              <Route path="/nut-ke-hau-mon" element={<NutKeHauMon />} />
              <Route path="/ro-hau-mon" element={<RoHauMon />} />
              <Route path="/tri-hon-hop" element={<TriHonnHop />} />
              <Route path="/ap-xe-hau-mon" element={<ApXeHauMon />} />
              <Route path="/benh-tri" element={<BenhTri />} />
              <Route path="/gioi-thieu" element={<GioiThieu />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
