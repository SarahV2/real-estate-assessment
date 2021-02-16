import logo from './logo.svg';
import TwitterLogo from './assets/twitter@3x.png';
import Services from './components/Services';

import './App.css';
import Partners from './components/Partners';
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
        <Partners/>
      </div>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
