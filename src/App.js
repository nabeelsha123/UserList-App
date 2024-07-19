import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUser/>}/>
      <Route path="/Search" element={<SearchUser/>}/>
      <Route path="/View" element={<ViewUser/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
