import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterForm from './Register/RegisterForm'
import RegisteredItem from './Register/RegisteredItems'
import Login from './LogIn/Login'
import CodeHelp from './CodeHelpLandPage/CodeHelp'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CodeHelp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/registeredData' element={<RegisteredItem/>}/>
                    <Route path='/RegisterForm' element={<RegisterForm/>}/>
                </Routes>
            </BrowserRouter>   
        </>
    )
}

export default App