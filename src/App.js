
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Input from './components/Input/Input';
import Testimonial from './components/testimonial/Testimonial';
import Work from './components/work/Work';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
