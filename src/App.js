import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import './styles/global.scss';
import StartPage from 'pages/StartPage/StartPage';
import CartPage from 'pages/CartPage/CartPage';

// Init
function App() {
  const customHistory = createBrowserHistory();

  return (
    <Router history={customHistory}>
     <div>
       {/*
         A <Switch> looks through all its children <Route>
         elements and renders the first one whose path
         matches the current URL. Use a <Switch> any time
         you have multiple routes, but you want only one
         of them to render at a time
       */}
       <Switch>
         <Route exact path="/">
           <StartPage />
         </Route>
         <Route path="/cart/:cartSection" component={CartPage} />
         <Route path="/cart">
           <CartPage />
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
