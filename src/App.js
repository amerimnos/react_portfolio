import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import './scss/style.scss';
import Header from './components/Header';
import Main from './components/main/Main';
import Community from './components/Community';
import Department from './components/Department';
import Youtube from './components/Youtube';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Join from './components/Join';
import Footer from './components/Footer';
import Pop from './components/Pop';

function App() {

    const [commuFirstContsIsActive, setCommuFirstContsIsActive] = useState(null);
    const [menuMobile,setMenuMobile] = useState('');

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Header menuMobile={menuMobile} setMenuMobile={setMenuMobile} frame="main" setCommuFirstContsIsActive={setCommuFirstContsIsActive}></Header>
                    <Main></Main>
                </Route>
                <Route path="/">
                    <Header menuMobile={menuMobile} setMenuMobile={setMenuMobile} frame="sub" setCommuFirstContsIsActive={setCommuFirstContsIsActive}></Header>
                </Route>
            </Switch>
            <Route path="/community" render={() => <Community setCommuFirstContsIsActive={setCommuFirstContsIsActive} commuFirstContsIsActive={commuFirstContsIsActive} />}></Route>
            <Route path="/department" component={Department}></Route>
            <Route path="/youtube" component={Youtube}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/location" component={Location}></Route>
            <Route path="/join" component={Join}></Route>

            <Footer></Footer>
            <Pop></Pop>
        </div>
    );
}

export default App;
