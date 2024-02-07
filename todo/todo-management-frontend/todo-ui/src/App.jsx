import { useState } from 'react'

import './App.css'

import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth) {
      return children;
    }
    return <Navigate to="/" />
  }

  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element = { <LoginComponent />} ></Route>

          {/* http://localhost:8080/todos */}
          <Route path='/todos' element = {<AuthenticatedRoute> <ListTodoComponent /> </AuthenticatedRoute>} ></Route>

          {/* http://localhost:8080/add-todo */}
          <Route path='add-todo' element = { <AuthenticatedRoute> <TodoComponent/> </AuthenticatedRoute>}></Route>


          {/* http://localhost:8080/update-todo/1 */}
          <Route path='/update-todo/:id' element = {<AuthenticatedRoute> <TodoComponent /> </AuthenticatedRoute>}></Route>

          {/* to route for register component */}
          <Route path='/register' element = { <RegisterComponent /> }></Route>

          {/* route for login component */}
          <Route path='/login' element = { <LoginComponent /> }></Route>


        </Routes>
      
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
