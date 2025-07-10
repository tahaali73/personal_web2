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
import ChatbotUI from "./Components/Chatbot";

const name = "Taha Ali";

// Layout component to wrap common elements like Navbar and Footer
function Layout({ children }) {
  return (
    <>
      {/* Navbar is rendered here for all routes using this Layout */}
      <Navbar name="Taha" />
      {/* Children prop will render the specific page component (Home, About, etc.) */}
      {children}
      {/* Footer is rendered here for all routes using this Layout */}
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
    <ThemeProvider>
      {/* The main container for the application, handling scroll behavior */}
      <div className="h-screen overflow-y-auto scrollbar-hide">
        <BrowserRouter>
          {/* Routes define which component to render based on the URL */}
          <Routes>
            {/* Route for 404 Not Found page */}
            <Route path="*" element={<NotFoundPage />} />

            {/* Route for CV Modal (assuming it's a standalone page/modal) */}
            <Route path="/cv" element={<CvModal />} />

            {/* Routes wrapped by the Layout component */}
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
          {/* ChatbotUI is placed here, outside of the <Routes> and <Layout>
              to ensure it's rendered globally and persists across page changes. */}
          <ChatbotUI />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
