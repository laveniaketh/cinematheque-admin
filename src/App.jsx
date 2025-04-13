import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import TicketManagement from "./pages/TicketManagement";
import MovieManagement from "./pages/MovieManagement";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login Route outside MainLayout */}
      <Route path="/" element={<LoginPage />} />

      {/* Routes inside MainLayout (with Sidebar) */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ticket-management" element={<TicketManagement />} />
        <Route path="movie-management" element={<MovieManagement />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
