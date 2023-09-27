
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className={'scroll-smooth'}>
      <Navbar/>
      <Home/>
      <About/>
      <Analytics />
      <Experience/>
    </div>
  );
}

export default App;
