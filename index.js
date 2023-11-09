import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Login Section

import Login from "./Login";

// DAshabord
import Dashboard from "./Dashboard";
import AddBot from "./Dashboard/AddBot";
import AllBots from "./Dashboard/AllBots";
import ViewBot from "./Dashboard/ViewBot";

import NOTFOUND from "./404";

// Nested routes.

function BotAPP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<AllBots />} />
          <Route path="add" element={<AddBot />} />
          <Route path="view/:id" element={<ViewBot />} />
        </Route>
        {/* <Route path="/dashboard" element={<AllBots />} />
        <Route path="/dashboard/add" element={<AddBot />} />
        <Route path="/dashboard/view" element={<ViewBot />} /> */}
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BotAPP;
