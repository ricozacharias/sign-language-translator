import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import Translator from './components/Translator/Translator';
import Profile from './components/Profile/Profile';
import RoutePrivate from './hoc/RoutePrivate';

function App() {

  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <RoutePrivate path="/translate" component={Translator} />
          <RoutePrivate path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
