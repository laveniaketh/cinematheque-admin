import React from "react";
import TicketTable from "../components/TicketTable";
import StatusDropdown from "../components/StatusDropdown";

const TicketManagement = () => {
  return (
    <div className="flex flex-col px-5 py-7 w-full ">
      <TicketTable />
    </div>
  );
};

export default TicketManagement;
