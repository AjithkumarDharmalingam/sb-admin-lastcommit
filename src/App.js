import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedExample from './components/NestedExample';
import Profile from './components/NestedComponents/Profile';
import Account from './components/NestedComponents/Account';
import UserContextComponent from './components/ContextComponent/UserContextComponent';
import DashboardContextComponent from './components/ContextComponent/DashboardContextComponent';
import UseRef from './components/NestedComponents/UseRef';
import UseReducer from './components/NestedComponents/UseReducer';

export default function App() {
  return <div id="wrapper">
     <UserContextComponent>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
       <Route path='/dashboard' element={
       <DashboardContextComponent>
            <Dashboard/>
       </DashboardContextComponent>}/>
       <Route path='/add-user' element={
       <AddUser/>}/>
       <Route path='/edit-user/:id' element={   
       <EditUser/>}/>
       <Route path='/nested-example' element={<NestedExample/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path ='use-ref' element={<UseRef/>}/>
          <Route path ='use-reducer' element={<UseReducer/>}/>
        </Route>  
       <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
    </Routes>
    </BrowserRouter>
    </UserContextComponent>
</div>
}

