import Home from './pages/home'
import About from './pages/about'
import Work from './pages/work';
import Projects from './pages/projects';
import Navbar from './components/navbar';
import Footer from './components/footer';


const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
