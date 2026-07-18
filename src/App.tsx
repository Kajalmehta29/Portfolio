import Background from "./components/layout/Background";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Background />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </>
  );
}

export default App;