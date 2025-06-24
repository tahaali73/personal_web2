import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NotFoundPage from "./Pages/NotFoundPage";
import CvModal from "./Pages/Home/Cv";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Chatbot from "./Chatbot/chatbot";

const name = "Taha Ali";

function Layout({ children }) {
  return (
    <>
      <Navbar name="Taha" />
      {children}
      <Footer
        name={name}
        email="diytech960@gmail.com"
        phoneNum="+923061133552"
        location="somewhere in the world"
      />
    </>
  );
}

function App() {
  return (
    //<Chatbot/>
    <ThemeProvider>
      <div className="h-screen overflow-y-auto scrollbar-hide">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/cv" element={<CvModal />} />

            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/About"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />

            <Route
              path="/Contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />

            <Route
              path="/Portfolio"
              element={
                <Layout>
                  <Portfolio />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  ); 
} 

export default App;
