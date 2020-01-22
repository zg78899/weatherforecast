import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
