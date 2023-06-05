import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from "./screens/HomePage"

function App() {
  return (
    <div className="App">
      <MyNav/>
      <BrowserRouter>
            <Routes>
                <Route path='/cyc_website/' element={<HomePage/>}></Route>
                {/* <Route path='/cyc_website/about' element={<AboutMe/>}></Route>
                <Route path='/cyc_website/apps' element={<Art/>}></Route>
                <Route path='/cyc_website/team' element={<Tech/>}></Route>
                <Route path='/cyc_website/projects' element={<Contact/>}></Route>
                <Route path='/cyc_website/donate' element={<Contact/>}></Route> */}

            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
