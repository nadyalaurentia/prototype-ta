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
      <Route key={id} path={`/case/${id}/reading`} element={Reading(id, "ini judul", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor dolor vel rhoncus. Vestibulum dictum dolor sed placerat efficitur. Nam lobortis mollis est nec imperdiet. Curabitur a enim nulla. In lacinia metus nulla, et tempor sapien elementum eget. Vestibulum volutpat et tortor non hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sapien dolor, efficitur id tincidunt sit amet, feugiat non neque. Vestibulum eleifend mollis lacus quis luctus. Praesent erat erat, aliquam nec diam vitae, lobortis iaculis massa. Proin porta luctus interdum. Aenean ut lacus in dolor gravida volutpat sed eu risus.\nNam suscipit eros mi, et dictum est vestibulum eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vel hendrerit enim. Suspendisse lectus dui, rhoncus eu pretium at, pulvinar pharetra neque. In hac habitasse platea dictumst. In non risus consequat urna sagittis porta. Vivamus sed enim ac dolor scelerisque sodales. Integer tincidunt nulla lorem, vel eleifend nibh efficitur id. Curabitur nisl dui, malesuada finibus lacinia non, vehicula nec odio. Etiam at urna sagittis, pulvinar nulla eu, eleifend lectus.\nUt semper sit amet ante consequat convallis. Suspendisse vitae metus et elit consectetur facilisis. Integer consectetur, dolor mollis eleifend pharetra, odio nunc euismod neque, auctor aliquet dui elit eget sapien. Mauris iaculis ante vitae ipsum fringilla sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere ex in mattis imperdiet. Sed luctus nunc ex, in venenatis augue venenatis quis. Nulla accumsan consectetur metus sit amet tristique. Integer ac magna ut eros efficitur vestibulum. Duis eget molestie velit. Nunc et diam eget magna molestie dictum. Duis ullamcorper ante ut magna finibus, ut pellentesque erat maximus.")}/>
      <Route key={id} path={`/case/${id}/questions`} element={Quiz(id)}/>
    </Routes>
  ));
  
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/final" Component={Final} />
      </Routes>
      {routePages}
    </Router>
  )
}

export default App;
