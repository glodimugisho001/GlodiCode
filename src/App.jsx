import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer.jsx";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import "./App.css"

function App() {
  return (
    <AlertProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <Alert />
      </main>
    </AlertProvider>
  );
}

export default App;
