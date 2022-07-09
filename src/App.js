import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Blog from "./components/blog/Blog";
import LayOut from './components/outlet/LayOut';
import LayOutBack from './components/outlet/LayOutBack';
import About from './components/about/About';


function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route  path="/" element={<LayOut/>}>
            <Route index element={<MainPage/>}/>
            <Route path="blogs" element={<BlogsPage/>}/>
          </Route>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<LayOutBack/>}>
            <Route path="/blogs/:id" element={<Blog/>}/>
            <Route path="about" element={<About/>}/>
          </Route>

        </Routes>
      </BrowserRouter>

  );
}

export default App;