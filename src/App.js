import { Provider } from "react-redux";
import store from "./redux/store";
import "../src/styles.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
