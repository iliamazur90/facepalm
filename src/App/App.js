import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main store={props.store} />
      <Footer />
    </div>
  )
}

export default App;
