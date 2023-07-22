import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Base";
import Toppings from "./Toppings";
import Order from "./Order";
import SendEmail from "./SendEmail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SendEmail} />
        <Route path="/base" Component={Base} />
        <Route path="/toppings" Component={Toppings} />
        <Route path="/order" Component={Order} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
