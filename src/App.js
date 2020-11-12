import Auth from './pages/Auth';
import Register from './pages/Register';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Link to="/register">Hello, lets try to register</Link>
      </Route>
      <Route path="/auth" component={Auth} exact/>
      <Route path="/register" component={Register} exact/>
    </div>
  );
}

export default App;
