import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './GLOBALCSS/GlobalCss.css';
import HomeMain from './Pages/HomePage/HomeMain';
import ShopMain from './Pages/ShopPage/ShopMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route exact path="/">
            <HomeMain />
         </Route>
         <Route exact path="/shop">
            <ShopMain />
         </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
