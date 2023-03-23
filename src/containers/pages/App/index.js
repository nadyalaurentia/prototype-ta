// import logo from '../../../logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Register from '../Register';
import Case1 from '../Case1';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Register} />
          <Route path="/case1" Component={Case1} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
