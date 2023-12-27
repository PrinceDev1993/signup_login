import React from 'react';
import { Route, Routes} from 'react-router-dom';
import "./index.css";
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';
import Authentication from './routes/Authentication';
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout';

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC PAGES */}
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Signup' element={<Authentication />} />

        {/* PRIVATE PAGE */}
        <Route element={<PrivateRoutesLayout />}>
          <Route path='/Project' element={<Project />} />
        </Route>
      </Routes> 
    </>
  );
}

export default App;
