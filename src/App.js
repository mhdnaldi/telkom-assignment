import Home from "./containers/Home/Home";
import Product from "./containers/Product/Product";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={Product} />
      </Switch>
    </div>
  );
}

export default App;
