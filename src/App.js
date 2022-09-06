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
import { RapidApi } from './api/RapidApi';
import { TaskApi } from './api/TaskApi';
import { RegisterUserType } from './components/CrudUserType/RegisterUserType';
import { NavbarUser } from './components/CrudUserType/NavbarUser';
import { ViewUserType } from './components/CrudUserType/ViewUserType';
import { submitTask } from './Tasks/submitTask';
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
      {/* <Routes>
        <Route path='/userType' element={<RegisterUserType/>}></Route>
        <Route path='/viewUser' element={<ViewUserType/>}></Route>
      </Routes> */}
        <submitTask/>
        <NavbarUser/>
    </div>

  );
}

export default App;
