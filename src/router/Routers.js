import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "../pages/Pages";
import componentsData from "../lib/componentspath/ComponentPath";
import ProtectedRouter from "../lib/protectedRouter/ProtectedRouter";

function Routers() {
  const token=JSON.parse(localStorage.getItem("userLinkedIn"));

  return (
    <Routes>
      <Route path="/" element={token?<Navigate to="/home"/>:<LoginPage />} />
      <Route path="/signup" element={token?<Navigate to="/home"/>:<SignUpPage />} />
      <Route element={<ProtectedRouter />}>
        {componentsData.map((item) => (
          <Route
            path={item.path}
            key={item.path} 
            element={item.component}
          />
        ))}
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Routers;
