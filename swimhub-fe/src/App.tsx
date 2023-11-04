import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/credentials/Login';
import SignUp from './pages/credentials/SignUp';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route index element={<Landing />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

       
  )
}

export default App
