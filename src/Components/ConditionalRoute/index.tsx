import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Services from "../Pages/Services";

export default function ConditionalNavbar() {
  // GET THE LOCATION
  const location = useLocation();

  const uniqroute = location.pathname === "/unique";

  console.log(location);

  return <>{uniqroute ? <Services /> : <Navbar />}</>;
}
