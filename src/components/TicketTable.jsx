import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import StatusDropdown from "./StatusDropdown";
import TablePagination from "./TablePagination";
import Search from "./Search";
import LoadingSpinner from "./LoadingSpinner";
import { ThemeProvider } from "flowbite-react";
import { useDebounce } from "react-use";

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const ticketsPerPage = 10;

  const customTheme = {
    table: {
      root: {
        base: "w-full text-left text-sm dark:text-[#6D6C6C]",
        shadow:
          "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      },
      body: {
        base: "group/body",
        cell: {
          base:
            "px-6 py-4 border-t  dark:border-[#3A3A3A] " +
            "group-first/body:group-first/row:first:rounded-tl-lg " +
            "group-first/body:group-first/row:last:rounded-tr-lg " +
            "group-last/body:group-last/row:first:rounded-bl-lg " +
            "group-last/body:group-last/row:last:rounded-br-lg",
        },
      },
      head: {
        base: "group/head text-xs uppercase text-gray-700 dark:text-white",
        cell: {
          base:
            "bg-gray-50 px-6 py-3  " +
            "group-first/head:first:rounded-tl-lg " +
            "group-first/head:last:rounded-tr-lg dark:bg-[#242424]",
        },
      },
      row: {
        base: "group/row dark:bg-[#282828] ",
        hovered:
          "dark:hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out",
        striped: "odd:dark:bg-[#2C2C2C] even:dark:bg-[#282828]",
      },
    },
  };

  // Debounce the search term
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1); // Reset to first page on new search
    },
    500,
    [searchTerm]
  );

  // Fetch all tickets from the backend ONCE
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/tickets");
        const data = await response.json();

        if (response.ok) {
          setTickets(data.tickets);
          setAllTickets(data.tickets);
          setTotalPages(Math.ceil(data.tickets.length / ticketsPerPage));
        } else {
          setError(data.msg || "Failed to fetch tickets.");
        }
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("An error occurred while fetching tickets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Filter tickets based on debounced search term
  useEffect(() => {
    if (!debouncedSearchTerm) {
      setTickets(allTickets);
      setTotalPages(Math.ceil(allTickets.length / ticketsPerPage));
      setCurrentPage(1);
      return;
    }
    setLoading(true);
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/tickets/search?q=${encodeURIComponent(
            debouncedSearchTerm
          )}`
        );
        const data = await response.json();
        if (response.ok) {
          setTickets(data.tickets);
          setTotalPages(Math.ceil(data.tickets.length / ticketsPerPage));
          setCurrentPage(1);
        } else {
          setError(data.msg || "Failed to search tickets.");
        }
      } catch {
        setError("An error occurred while searching tickets.");
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
    // eslint-disable-next-line
  }, [debouncedSearchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Only show tickets for the current page
  const startIdx = (currentPage - 1) * ticketsPerPage;
  const endIdx = startIdx + ticketsPerPage;
  const ticketsToShow = tickets.slice(startIdx, endIdx);

  // Update ticket status in local state after dropdown change
  const handleStatusChange = (ticketID, newStatus) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.ticketID === ticketID ? { ...t, ticketStatus: newStatus } : t
      )
    );
    setAllTickets((prev) =>
      prev.map((t) =>
        t.ticketID === ticketID ? { ...t, ticketStatus: newStatus } : t
      )
    );
  };

  if (isLoading) {
    return (
      <ThemeProvider theme={customTheme}>
        <div className="overflow-visible flex flex-col gap-5">
          <Search onSearch={setSearchTerm} />
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Ticket ID</TableHeadCell>
                <TableHeadCell>Movie</TableHeadCell>
                <TableHeadCell>Seat(s)</TableHeadCell>
                <TableHeadCell>Created At</TableHeadCell>
                <TableHeadCell>Total Payment</TableHeadCell>
                <TableHeadCell>Payment Status</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="animate-pulse">
              {[...Array(10)].map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell>‎ </TableCell>
                  <TableCell>‎ </TableCell>
                  <TableCell>‎ </TableCell>
                  <TableCell>‎ </TableCell>
                  <TableCell>‎ </TableCell>
                  <TableCell>‎ </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <LoadingSpinner /> */}
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </ThemeProvider>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className="overflow-visible flex flex-col gap-5">
        <Search onSearch={setSearchTerm} />
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Ticket ID</TableHeadCell>
              <TableHeadCell>Movie</TableHeadCell>
              <TableHeadCell>Seat(s)</TableHeadCell>
              <TableHeadCell>Created At</TableHeadCell>
              <TableHeadCell>Total Payment</TableHeadCell>
              <TableHeadCell>Payment Status</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsToShow.map((ticket) => (
              <TableRow key={ticket.ticketID}>
                <TableCell>{ticket.ticketID}</TableCell>
                <TableCell>{ticket.movietitle}</TableCell>
                <TableCell>{ticket.seatNumbers.join(", ")}</TableCell>
                <TableCell>
                  {new Date(ticket.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>₱ {ticket.paymentAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusDropdown
                    ticketID={ticket.ticketID}
                    currentStatus={ticket.ticketStatus}
                    onStatusChange={(newStatus) =>
                      handleStatusChange(ticket.ticketID, newStatus)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default TicketTable;
