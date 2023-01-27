import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes , Route} from 'react-router-dom';



function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Home />
          <Routes>
              <Route path="/" exact element={Home} />
              {/*
                 //Routes to the specific pages
              <Route path="/animals" exact element={Animals} />
              <Route path="/animals" exact element={Organization} />
              <Route path="/animals" exact element={Type} /> */}
          </Routes>
        </BrowserRouter> 
    </>
  
  );
}

export default App;
