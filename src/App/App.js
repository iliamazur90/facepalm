import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <Main store={props.store} />
      <Footer />
    </div>
  )
}

export default App;
