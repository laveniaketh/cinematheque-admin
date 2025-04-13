import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import MySidebar from "../components/MySidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <MySidebar />
      <main className="flex-1 p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
