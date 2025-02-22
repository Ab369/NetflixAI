import {BrowserRouter as Router,Routes,Route} from 'react-router'
import Login from './components/login';
import Browse from './components/browse';
import Signup from './components/signup';
import { useEffect } from 'react';
import auth from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import{adduser,removeuser} from './utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header';

const App=()=>{
    
    const user=useSelector((store)=>store.user)
    return(
        <Router>
            {user&&<Header/>}
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/browse' element={<Browse/>}/>
            </Routes>
        </Router>
    )
}

export default App;