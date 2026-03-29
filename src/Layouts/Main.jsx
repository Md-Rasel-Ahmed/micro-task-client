import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Footer";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
