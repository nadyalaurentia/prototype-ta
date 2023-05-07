import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../Register';
import Preparation from '../../reusable/preparation';
import Reading from '../../reusable/reading';
import Quiz from '../Quiz';
import Final from '../Final';


function App() {
  const [resultArr, setResultArr] = useState([]);

  const addData = (data) => {
    setResultArr((prevResultArr) => [...prevResultArr, data]);
  };

  useEffect(() => {
    if (resultArr.length > 0) {
      console.log(resultArr); // Print the final result to the console
    }

    return () => {
      // clean up
    };
  }, [resultArr]);


  const caseID = [...Array(8).keys()].map((i) => i + 1);

  // const routePages = caseID.map((id) => {
    // return (
    //   <Routes>
        
    //   </Routes>
    // )
  // });


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register addData={addData}/>} />
        <Route path="/final" Component={Final} />
        <Route path={`/case/:session`} element={<Preparation />} />
        <Route path={`/case/:session/reading`} element={<Reading addData={addData} />} />
        <Route path={`/case/:session/questions`} element={<Quiz addData={addData} />} />
      </Routes>
      {/* {routePages} */}
    </Router>
  )
}

export default App;
