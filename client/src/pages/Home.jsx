import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppLayout from "../components/layouts/AppLayout";

function Home() {
  return <div>This is home stuff</div>;
}

export default AppLayout()(Home);
