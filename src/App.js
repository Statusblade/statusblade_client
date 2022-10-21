import logo from './logo.svg';
import Login from './views/Login'
import Profile from './views/Profile'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/profile" >
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
