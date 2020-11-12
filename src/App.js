import Auth from './pages/Auth';
import Register from './pages/Register';
import Home from './pages/Home';
import {Route, Link, Redirect} from 'react-router-dom';

function App() {
  const isAuth = true;
  return (
    <div className="App">
      <Route path="/" exact>
        <Link to="/register">Hello, lets try to register</Link>
      </Route>
      <Route path="/auth" component={Auth} exact/>
      <Route path="/register" component={Register} exact/>
      {isAuth ? <Route path="/home" component={Home} exact/> : <Redirect to="/" />}
    </div>
  );
}

export default App;
