import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import Home from './component/Home';
// import Register from './component/Register';
// import Login from './component/Login';
import './App.css'
import Pizza from './component/Pizza';
// import Cart from './component/Cart';

function App() {
  
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
