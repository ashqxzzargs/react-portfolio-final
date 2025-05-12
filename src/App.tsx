import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

import "./index.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full antialiased ">
        <div className="app-container my-10 ">
          <main className="min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10">
            <Header />
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <About />
              </div>
              <div className="md:w-1/2">
                <Skills />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Education />
              </div>
              <div className="md:w-1/2">
                <Contact />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
