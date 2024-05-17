import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import About from "./About";

const Context = createContext(null);

function App() {
  const obj = {
    name: "Prakhar",
    company: "Bluecoin IoT Solution",
  };

  return (
    <BrowserRouter>
      <Header />
      <h3>Welcome</h3>
      <Context.Provider value={obj}>
        <Routes>
          <Route path="/login" element={<Login objs={obj} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Context };
