import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './GLOBALCSS/GlobalCss.css';
import HomeMain from './Pages/HomePage/HomeMain';
import ShopMain from './Pages/ShopPage/ShopMain';
import SingleProductMain from './Pages/SingleProductPage/SingleProductMain';
import WishListMain from './Pages/WishListPage/WishListMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route exact path="/">
            <HomeMain />
         </Route>
         <Route exact path="/home">
            <HomeMain />
         </Route>
         <Route exact path="/shop">
            <ShopMain />
         </Route>
         <Route exact path="/wishlist">
            <WishListMain />
         </Route>
         <Route exact path="/shop/products/singleProducts/:productId">
            <SingleProductMain />
         </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
