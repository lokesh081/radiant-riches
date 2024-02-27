import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import 'bootstrap/dist/css/bootstrap.css';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App flex-column">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
