import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail';
import Home from './views/Home';
import New from './views/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <New />
          </Route>
          <Route exact path="/dog/:id">
            <DogDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
