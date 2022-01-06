import { Route } from 'react-router-dom';
import { useState } from 'react';

import './css/style.css';
import Header from './components/Header';
import Main from './components/Main';
import Community from './components/Community';
import Department from './components/Department';
import Youtube from './components/Youtube';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {

    const [commuFirstContsIsActive, setCommuFirstContsIsActive] = useState(null);
    console.log(commuFirstContsIsActive, "app_commuFirstContsIsActive");

    return (
        <div className="App">
            <Header setCommuFirstContsIsActive={setCommuFirstContsIsActive}></Header>

            <Route exact path="/" component={Main}></Route>
            <Route path="/community" render={() => <Community setCommuFirstContsIsActive={setCommuFirstContsIsActive} commuFirstContsIsActive={commuFirstContsIsActive} />}></Route>
            <Route path="/department" component={Department}></Route>
            <Route path="/youtube" component={Youtube}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/location" component={Location}></Route>
            <Route path="/join" component={Join}></Route>

            <Footer></Footer>
        </div>
    );
}

export default App;
