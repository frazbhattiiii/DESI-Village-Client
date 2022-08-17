import './App.css';
import {
    BrowserRouter ,
    Routes ,
    Route ,
} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Activation from './Pages/Activation';
import Forgot from './Pages/Forgot';
import Reset from './Pages/Reset';
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import NoPage from "./Pages/NoPage";
import CartPage from "./Pages/CartPage";
import Contact from "./Pages/Contact";
import Item from "./Components/MenuItem/Item";
import Loader from "./Components/Loader/Loader";
import About from "./Pages/About";
import Menu from './Pages/Menu';
import Profile from "./Pages/Profile";
import { Main } from "./Pages/vendor-routes/main/main.component";


function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard/> }>

                </Route>
                <Route path="/home" element={ <Dashboard/> }/>
                <Route path="/signup" element={ <Signup/> }/>
                <Route path="/users/activate/:token" element={ <Activation/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/users/password/forget" element={ <Forgot/> }/>
                <Route path="/users/password/reset/:token" element={ <Reset/> }/>
                <Route path='/logout' element={ <Logout/> }/>
                <Route path='/cart' element={ <CartPage/> }/>
                <Route path='/contact' element={ <Contact/> }/>
                <Route path='/about' element={ <About/> }/>
                <Route path='/menu' element={ <Menu/> }/>
                <Route path = 'item/detail/:id' element = {<Item/>}/>
                <Route path="*" element={ <NoPage/> }/>
                <Route path="/loading" element={ <Loader/> }/>
                <Route path='/profile' element ={<Profile/>}/>
                <Route path='/orders' element ={<Profile/>}/>
                <Route path='/vendor' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
