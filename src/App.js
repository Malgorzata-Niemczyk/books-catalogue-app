import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Authors from './views/Authors';
import Publishers from './views/Publishers';
import Books from './views/Books';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/autorzy">
            <Authors/>
          </Route>
          <Route path="/wydawnictwa">
            <Publishers/>
          </Route>
          <Route path="/ksiazki">
            <Books/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
