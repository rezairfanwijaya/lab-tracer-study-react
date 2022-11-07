
import './App.css';
import Map from './map/Map';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/form">
            <Form />
          </Route>

          <Route path="/map">
            <Map />
          </Route>

        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
