import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

const Private = ({Item}) =>{
    const signed = false;

    return signed > 0 ? <Item/> : <Signin/>;
}

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
           <Routes>
                <Route exact path='/home' element={<Private Item={Home}/>}/>
                <Route path='/' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='*' element={<Signin/>}/>
            </Routes>    
        </BrowserRouter>
    );
};

export default RoutesApp