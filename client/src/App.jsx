import React, { Suspense, useEffect } from "react";
import { Routes, BrowserRouter, Route, redirect } from "react-router-dom";
import { lazy } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./slices/authSlice.js";
import LayoutLoader from "./components/layouts/Loading.jsx";
import NotFound from "./pages/NotFound.jsx";

// lazy loading of pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Upload = lazy(() => import("./pages/Upload.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const ProtectedRoutes = lazy(() => import("./utils/ProtectedRoutes.jsx"));

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const App = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    axios.get("/profile").then((response) => {
      if (response.data == null && userInfo) {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      {/* loading screen in LayoutLoader */}
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* These are not made yet change as per need */}
          <Route path="/contact" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
          <Route path="/help" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
