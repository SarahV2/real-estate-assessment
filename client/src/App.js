import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SideNav from './components/layout/SideNav';
import ProcessInfo from './components/ProcessInfo';
import Services from './components/Services';
import APIResponse from './components/APIResponse';
import Partners from './components/Partners';

function App() {
  return (
    <div id='app'>
      <SideNav outerContainerId={'app'} />
      <div className='app'>

      <Navbar />
      <div className='container'>
        {/* Process Stages */}
        <ProcessInfo />

        {/* Api */}
        <APIResponse />

        {/* Services */}
        <Services />

        {/* Partners */}
        <Partners />
      </div>
      <Footer />
    </div>
    </div>
  );
}
export default App;
