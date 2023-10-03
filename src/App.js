import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBed from './Components/AddBed';
import SearchBed from './Components/SearchBed';
import ViewBed from './Components/ViewBed';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<AddBed/>}/>
    <Route path='/searchb' exact element={<SearchBed/>}/>
    <Route path='/viewb' exact element={<ViewBed/>}/>
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
