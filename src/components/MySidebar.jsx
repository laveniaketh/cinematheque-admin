import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
// react component for the image icon
const dashboardIcon = () => (
  <img src="/dashboard-icon.png" alt="Dashboard Icon" className="w-5 h-5" />
);
const ticketManagementIcon = () => (
  <img
    src="/ticket-management-icon.png"
    alt="Ticket Management Icon"
    className="w-5 h-5"
  />
);
const movieManagementIcon = () => (
  <img
    src="/movie-management-icon.png"
    alt="Movie Management Icon"
    className="w-5 h-5"
  />
);
const logoutIcon = () => (
  <img src="/logout-icon.png" alt="Logout Icon" className="w-5 h-5" />
);

const MySidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) =>
    currentPath === path
      ? "dark:bg-[#2C2C2C] font-semibold text-white"
      : "dark:hover:bg-[#2C2C2C] dark:hover:font-semibold";

  return (
    <Sidebar className="[&>div]:dark:bg-[#242424] h-screen [&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] dark:[&>div]:border-white [&>div]:border-2">
      <SidebarLogo img="/logo2.png">Cinematheque</SidebarLogo>
      <SidebarItems className="my-15">
        <SidebarItemGroup>
          <SidebarItem
            icon={dashboardIcon}
            as={Link}
            to="/dashboard"
            className={`dark:hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out ${isActive(
              "/dashboard"
            )}`}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            icon={ticketManagementIcon}
            as={Link}
            to="/ticket-management"
            className={`dark:hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out ${isActive(
              "/ticket-management"
            )}`}
          >
            Ticket Management
          </SidebarItem>
          <SidebarItem
            icon={movieManagementIcon}
            as={Link}
            to="/movie-management"
            className={`dark:hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out ${isActive(
              "/movie-management"
            )}`}
          >
            Movie Management
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup className="border-t dark:border-[#2C2C2C]">
          <SidebarItem
            icon={logoutIcon}
            as={Link}
            to="/"
            className="transition-all duration-300 ease-in-out dark:hover:bg-[#2C2C2C] dark:hover:font-semibold"
          >
            Logout
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default MySidebar;
