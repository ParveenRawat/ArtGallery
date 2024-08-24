import React, { Suspense } from "react";
import { Routes, BrowserRouter, Route, redirect } from "react-router-dom";
import { lazy } from "react";

import LayoutLoader from "./components/layouts/Loading.jsx";
import NotFound from "./pages/NotFound.jsx";

// lazy loading of pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Upload = lazy(() => import("./pages/Upload.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      {/* loading screen in LayoutLoader */}
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* These are not made yet change as per need */}
          <Route path="/contact" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
          <Route path="/help" element={<Home />} />
          <Route path="/about" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
