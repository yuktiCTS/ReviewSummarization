import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
