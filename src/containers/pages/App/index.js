import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../Register';
import Preparation from '../Preparation/preparation';
import Reading from '../Reading/reading';
import Quiz from '../Quiz';
import Final from '../Final';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/final" Component={Final} />
        <Route path={`/case/:session`} element={<Preparation />} />
        <Route path={`/case/:session/reading`} element={<Reading />} />
        <Route path={`/case/:session/questions`} element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App;
