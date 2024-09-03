// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Posts from './pages/Posts'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
