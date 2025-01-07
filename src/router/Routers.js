import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "../pages/Pages";
import componentsData from "../lib/componentspath/ComponentPath";
import ProtectedRouter from "../lib/protectedRouter/ProtectedRouter";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

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
