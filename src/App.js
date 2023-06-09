import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Footer } from './components/Footer';

import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from "./screens/HomePage"
import {About} from "./screens/About"
import {Apps} from "./screens/Apps"
import {Team} from "./screens/Team"
import {Projects} from "./screens/Projects"
import {Donate} from "./screens/Donate"
import { Privacy } from './screens/Privacy';
import { TeamMember } from './screens/TeamMember';
import { Apply } from './screens/Apply';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav/>
            <Routes>
                <Route path='/cyc-website/' element={<HomePage/>}></Route>
                <Route path='/cyc-website/about/' element={<About/>}></Route>
                <Route path='/cyc-website/apps/' element={<Apps/>}></Route>
                <Route path='/cyc-website/team/' element={<Team/>}></Route>
                <Route path='/cyc-website/projects/' element={<Projects/>}></Route>
                <Route path='/cyc-website/donate/' element={<Donate/>}></Route>
                <Route path='/cyc-website/teamMember/' element={<TeamMember/>}></Route>
                <Route path='/cyc-website/apply/' element={<Apply/>}></Route>
                <Route path='/cyc-website/privacy/' element={<Privacy/>}></Route>
            </Routes>
          
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
