import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Tutor from './components/Tutor/Tutor';
function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/Tutor">
          <Tutor />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
