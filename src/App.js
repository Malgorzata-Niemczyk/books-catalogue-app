import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Authors from './views/Authors';
import Publishers from './views/Publishers';
import Books from './views/Books';
import AddAuthor from './views/forms/AddAuthor';
import EditAuthor from './views/forms/EditAuthor';
import EditPublishers from './views/forms/EditPublishers';
import AddPublishers from './views/forms/AddPublishers';
import AddBook from './views/forms/AddBook';
import EditBook from './views/forms/EditBook';

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
          <Route exact path="/autorzy">
            <Authors/>
          </Route>
          <Route path="/autorzy/dodaj-nowego-autora">
            <AddAuthor/>
          </Route>
          <Route exact path="/autorzy/:id/etytuj-dane-autora">
            <EditAuthor/>
          </Route>
          <Route exact path="/wydawnictwa">
            <Publishers/>
          </Route>
          <Route path="/wydawnictwa/dodaj-nowe-wydawnictwo">
            <AddPublishers/>
          </Route>
          <Route exact path="/wydawnictwa/:id/etytuj-dane-wydawnictwa">
            <EditPublishers/>
          </Route>
          <Route exact path="/ksiazki">
            <Books/>
          </Route>
          <Route path="/ksiazki/dodaj-nowa-ksiazke">
            <AddBook/>
          </Route>
          <Route exact path="/ksiazki/:id/etytuj-dane-ksiazki">
            <EditBook/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
