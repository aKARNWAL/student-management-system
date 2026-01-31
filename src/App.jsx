import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar"
import Drawer from "./components/Drawer"
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/student/Students";

import Notices from "./pages/Notices";

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar setOpen = {setOpen}/>
      <Drawer open = {open} setOpen = {setOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/student" element={<Students />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
     </>
  )
}

export default App
