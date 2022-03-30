import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { getUser } from './services/users';
import Auth from './views/Auth';
import DogDetail from './views/DogDetail';
import EditDogDetail from './views/EditDogDetail';
import Home from './views/Home';
import New from './views/New';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log('current user:', currentUser);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home currentUser={currentUser} />
          </Route>
          <Route exact path="/new">
            {currentUser ? <New /> : <Redirect to="/signin" />}
          </Route>
          <Route exact path="/dog/:id">
            <DogDetail currentUser={currentUser} />
          </Route>
          <Route exact path="/dog/:id/edit">
            <EditDogDetail currentUser={currentUser} />
          </Route>
          <Route exact path="/signin">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
