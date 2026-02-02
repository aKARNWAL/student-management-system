import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar"
import Drawer from "./components/Drawer"
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/students/Students";

import Notices from "./pages/Notices";

function App() {
  const [opendrawer, setOpendrawer] = useState(false)

  return (
    <>
      <AppBar setOpendrawer = {setOpendrawer}/>
      <Drawer opendrawer = {opendrawer} setOpendrawer = {setOpendrawer}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
     </>
  )
}

export default App
