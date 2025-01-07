import {BrowserRouter as Router,Routes,Route} from 'react-router'
import Login from './components/login';
import Browse from './components/browse';
import Signup from './components/signup';

const App=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/browse' element={<Browse/>}/>
            </Routes>
        </Router>
    )
}

export default App;