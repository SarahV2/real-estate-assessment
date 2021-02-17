import logo from './logo.svg';
import Services from './components/Services';

import './App.css';
import Partners from './components/Partners';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className='App'>
      <nav>Navbar</nav>
      <div className='container'>
        <section className='content' id='steps'>
          Steps
        </section>
        <section className='content' id='apiData'>
          API Res.
        </section>

        {/* Services */}
        <Services />

        {/* Partners */}
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
