// import logo from '../../../logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../Register';
import Preparation from '../../reusable/preparation';
import Reading from '../../reusable/reading';
import Quiz from '../Quiz';
import Final from '../Final';


function App() {
  const caseID = [...Array(8).keys()].map((i) => i + 1);

  const routePages = caseID.map((id) => ( 
    <Routes>
      <Route key={id} path={`/case/${id}`} element={Preparation(id)}/>
      <Route key={id} path={`/case/${id}/reading`} element={Reading(id)}/>
      <Route key={id} path={`/case/${id}/questions`} element={Quiz(id)}/>
    </Routes>
  ));
  
   

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={Register()} /> */}
        <Route path="/" Component={Register} />
        <Route path="/final" Component={Final} />
      </Routes>
      {routePages}
    </Router>
  )
}

export default App;
