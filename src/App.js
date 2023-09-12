
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={'scroll-smooth'}>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
