import logo from './logo.svg';
import Services from './components/Services';

import './App.css';
import Partners from './components/Partners';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ProcessInfo from './components/ProcessInfo';
import APIResponse from './components/APIResponse';
function App() {
  return ( 
    <div className='app'>
      <Navbar/>
      <div className='container'>
        {/* <section className='content' id='processInfo'>
          Steps
        </section> */}
        <ProcessInfo/>

        <APIResponse/>


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
