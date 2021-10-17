
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './page/Header/Header';
import Home from './page/Home/Home/Home';
import Notfound from './page/Notfound/Notfound';


function App() {
  return (
   <BrowserRouter>
   <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
