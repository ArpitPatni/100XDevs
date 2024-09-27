import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";
import React, { Suspense } from "react";
const Dashboard=React.lazy(()=>import("./components/Dashboard"))
const Landing=React.lazy(()=>import("./components/Landing"))

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading...">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
