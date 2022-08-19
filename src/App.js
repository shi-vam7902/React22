import './App.css';
import { Employee } from './crudEmployee/Employee';
// import { Footer } from './crudEmployee/Footer';
import { HeaderEmployee } from './crudEmployee/HeaderEmployee';
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from './components/AboutUs';
import { Navbar } from './components/Navbar';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { ContactDetail } from './components/ContactDetail';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { StudentRegistration } from './components/StudentRegistration';
import { Header } from "./components/Header";
import {Footer} from "./crudEmployee/Footer"
import { UserApi } from './api/UserApi';
import {LoadingSpinner} from './api/LoadingSpinner'
function App() {

  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>

        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contactdetails/:id/:name' element={<ContactDetail/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />

      </Routes> */}
      <Header/>
      <UserApi/>
      <Footer/>

    </div>

  );
}

export default App;
