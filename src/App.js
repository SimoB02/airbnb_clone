import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";   
import {PersonalArea, Registrazione, Homepage, LoginForm } from './views'

import MapComponent from "./views/MapComponent"

function App() {
  return (

    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/Registrazione" element={<Registrazione />}></Route>

          <Route path="/Login" element={<LoginForm />}></Route>

          <Route path="/mappa" element = {<MapComponent />}></Route>

                 {
          <Route path="/AreaPersonale" element={

          /*<ProtectedRoute> */
            
          <PersonalArea />

        /*  </ProtectedRoute> */  }> </Route>
          }

          </Routes>
    </BrowserRouter>

  );
}

export default App;
