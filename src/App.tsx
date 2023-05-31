import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Social from "./components/Social";

function App() {
  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Contact />
      <Social />
    </>
  );
}

export default App;
