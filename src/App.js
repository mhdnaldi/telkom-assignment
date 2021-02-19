import Home from "./containers/Home/Home";
import Product from "./containers/Product/Product";
import Cart from "./containers/Cart/Cart";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
