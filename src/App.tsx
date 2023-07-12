
import React from 'react';
import { Login } from './views/login/Login.page';
import { Register } from './views/register/Register.page';
import {Routes,Route} from 'react-router-dom'
import MyRoutes from './routes'
import { Home } from './views/home/Home.page';



export const App:React.FC=()=>{
  return  <div> 
    {/*<MyRoutes/>*/}
    
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
        
  </div>
}