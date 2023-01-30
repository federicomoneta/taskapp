import logo from './logo.svg';
import './App.css';
import ShowTasks from './task/ShowTasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTask from './task/CreateTask';
import EditTask from './task/EditTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowTasks/>}></Route>
          <Route path='/create' element={<CreateTask/>}></Route>
          <Route path='/edit/:id' element={<EditTask/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
