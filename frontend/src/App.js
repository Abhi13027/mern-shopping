import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={Order}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/placeorder" component={PlaceOrder}></Route>
          <Route path="/payment" component={Payment}></Route>
          <Route path="/shipping" component={Shipping}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/cart/:id?" component={Cart}></Route>
          <Route exact path="/" component={Home}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
