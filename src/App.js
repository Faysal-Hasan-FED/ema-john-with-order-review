import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/orders" element={<OrderReview></OrderReview>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
