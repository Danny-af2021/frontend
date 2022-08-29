import { useAuth0 } from '@auth0/auth0-react';

import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Actualidad from './components/actualidad';
import Economia from './components/economia';
import Home from './components/home';
import Deporte from './components/deporte';
import Sesion from './components/sesion';
import NavBarExample from './layaouts/navbar';




function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample/>}>

            <Route index element={<Home/>}/>
            <Route path='actualidad' element={<Actualidad/>}/>
            <Route path='economia' element={<Economia/>}/>
            <Route path='deporte' element={<Deporte/>}/>
            <Route path='sesion' element={<Sesion/>}/>

            <Route path='*' element={<Navigate replace to="/"/>}/>
             
          </Route>  
            
        </Routes>
        
      </BrowserRouter>
      
        
  {isAuthenticated ? (
    <>
      <Profile/>
      <LogoutButton/>
    </>
    ) : (
    <LoginButton/>
    )}
    
    </div>
    
  );
}

export default App;
