import './App.css';
import Login from './components/login/Login.jsx';
import Home from './components/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
