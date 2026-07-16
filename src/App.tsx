import Background from "./components/layout/Background";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <Background />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;