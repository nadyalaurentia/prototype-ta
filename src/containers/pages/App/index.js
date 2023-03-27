// import logo from '../../../logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Register from '../Register';
// import Case1 from '../Case1';
// import Reading1 from '../Reading1';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" Component={Register} />
//           <Route path="/case/1" Component={Case1} />
//           <Route path="/case/1/reading" Component={Reading1} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

import Preparation from '../../reusable/preparation';
import Reading from '../../reusable/reading';
// import Questions from '../../reusable/pertanyaan';
import Quiz from '../Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/case/1" element={Preparation(1)} />
        <Route path="/case/1/reading" element={Reading("ini judul", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis vel mauris vel feugiat. Aliquam volutpat fermentum commodo. Maecenas non lorem eu ligula semper gravida. Nunc in vehicula massa, quis tincidunt arcu. Quisque massa velit, blandit sit amet eleifend vel, laoreet et neque. Ut scelerisque vitae nisl vel suscipit. Nulla posuere interdum velit congue sollicitudin. In a libero volutpat, facilisis diam eu, dapibus odio. Ut vel maximus massa, quis dictum leo. Aliquam fermentum tortor vitae nibh faucibus eleifend. Vestibulum feugiat euismod turpis, at aliquet odio cursus eu. Duis dictum turpis vitae elit sodales gravida. Suspendisse velit augue, consectetur tempus nunc ac, egestas viverra orci. Mauris aliquam, eros ut egestas tincidunt, elit metus commodo quam, nec eleifend nulla augue quis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis vel mauris vel feugiat. Aliquam volutpat fermentum commodo. Maecenas non lorem eu ligula semper gravida. Nunc in vehicula massa, quis tincidunt arcu. Quisque massa velit, blandit sit amet eleifend vel, laoreet et neque. Ut scelerisque vitae nisl vel suscipit. Nulla posuere interdum velit congue sollicitudin. In a libero volutpat, facilisis diam eu, dapibus odio. Ut vel maximus massa, quis dictum leo. Aliquam fermentum tortor vitae nibh faucibus eleifend. Vestibulum feugiat euismod turpis, at aliquet odio cursus eu. Duis dictum turpis vitae elit sodales gravida. Suspendisse velit augue, consectetur tempus nunc ac, egestas viverra orci. Mauris aliquam, eros ut egestas tincidunt, elit metus commodo quam, nec eleifend nulla augue quis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis vel mauris vel feugiat. Aliquam volutpat fermentum commodo. Maecenas non lorem eu ligula semper gravida. Nunc in vehicula massa, quis tincidunt arcu. Quisque massa velit, blandit sit amet eleifend vel, laoreet et neque. Ut scelerisque vitae nisl vel suscipit. Nulla posuere interdum velit congue sollicitudin. In a libero volutpat, facilisis diam eu, dapibus odio. Ut vel maximus massa, quis dictum leo. Aliquam fermentum tortor vitae nibh faucibus eleifend. Vestibulum feugiat euismod turpis, at aliquet odio cursus eu. Duis dictum turpis vitae elit sodales gravida. Suspendisse velit augue, consectetur tempus nunc ac, egestas viverra orci. Mauris aliquam, eros ut egestas tincidunt, elit metus commodo quam, nec eleifend nulla augue quis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis vel mauris vel feugiat. Aliquam volutpat fermentum commodo. Maecenas non lorem eu ligula semper gravida. Nunc in vehicula massa, quis tincidunt arcu. Quisque massa velit, blandit sit amet eleifend vel, laoreet et neque. Ut scelerisque vitae nisl vel suscipit. Nulla posuere interdum velit congue sollicitudin. In a libero volutpat, facilisis diam eu, dapibus odio. Ut vel maximus massa, quis dictum leo. Aliquam fermentum tortor vitae nibh faucibus eleifend. Vestibulum feugiat euismod turpis, at aliquet odio cursus eu. Duis dictum turpis vitae elit sodales gravida. Suspendisse velit augue, consectetur tempus nunc ac, egestas viverra orci. Mauris aliquam, eros ut egestas tincidunt, elit metus commodo quam, nec eleifend nulla augue quis ex. ")} />
        <Route path="/case/1/questions" Component={Quiz} />
      </Routes>
    </Router>
  )
}

export default App;
