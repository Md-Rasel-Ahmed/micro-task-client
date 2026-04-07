import { Route, Routes } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Authentication/Singup/Singup";
import Login from "../Pages/Authentication/Login";
import Dashboard from "../Layouts/Dashboard";
import WorkerHome from "../Pages/Dashboard/Worker_Dashboard/WorkerHome";
import TaskList from "../Pages/Dashboard/Worker_Dashboard/TaskList";
import MySubmissions from "../Pages/Dashboard/Worker_Dashboard/MySubmissions";
import Withdrawals from "../Pages/Dashboard/Worker_Dashboard/Withdrawals";
import AddTask from "../Pages/Dashboard/Buyer/AddTask";
import MyTasks from "../Pages/Dashboard/Buyer/MyTasks";
import PurchaseCoin from "../Pages/Dashboard/Buyer/PurchaseCoin";
import BuyerHome from "../Pages/Dashboard/Buyer/BuyerHome";
import PaymentHistory from "../Pages/Dashboard/Worker_Dashboard/PaymentHistory";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Route>
      {/* dashboead */}
      <Route path="/dashboard" element={<Dashboard></Dashboard>}>
        {/* worker */}
        <Route path="workerHome" element={<WorkerHome></WorkerHome>}></Route>
        <Route path="taskList" element={<TaskList></TaskList>}></Route>
        <Route path="withdrawals" element={<Withdrawals></Withdrawals>}></Route>
        <Route
          path="payments"
          element={<PaymentHistory></PaymentHistory>}
        ></Route>
        <Route
          path="mySubmision"
          element={<MySubmissions></MySubmissions>}
        ></Route>
        {/* buyer */}
        <Route path="buyerHome" element={<BuyerHome></BuyerHome>}></Route>
        <Route path="addNewTask" element={<AddTask></AddTask>}></Route>
        <Route path="myTasks" element={<MyTasks></MyTasks>}></Route>
        <Route
          path="purchaseCoins"
          element={<PurchaseCoin></PurchaseCoin>}
        ></Route>
      </Route>
    </Routes>
  );
}
