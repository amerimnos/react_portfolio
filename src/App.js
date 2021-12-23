import {Route} from 'react-router-dom';
import Header from './common/Header';
import Main from './components/Main';
import Community from './components/Community';
import Department from './components/Department';
import Youtube from './components/Youtube';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Join from './components/Join';
import Footer from './common/Footer';


function App() {
  return (
    <div className="App">
        <Header></Header>

        <Route exact path="/" component={Main}></Route>
        <Route exact path="/community" component={Community}></Route>
        <Route exact path="/department" component={Department}></Route>
        <Route exact path="/youtube" component={Youtube}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route exact path="/location" component={Location}></Route>
        <Route exact path="/join" component={Join}></Route>

        <Footer></Footer>
    </div>
  );
}

export default App;
