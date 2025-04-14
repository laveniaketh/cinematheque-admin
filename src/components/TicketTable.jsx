import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import StatusDropdown from "./StatusDropdown";
import PaymentStatus from "./PaymentStatus";
import Search from "./Search";
import TablePagination from "./TablePagination";
import { ThemeProvider } from "flowbite-react";

const TicketTable = () => {
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

  return (
    <ThemeProvider theme={customTheme}>
      <div className="overflow-visible flex flex-col gap-5 ">
        <Search />
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
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5363420</TableCell>
              <TableCell>In the Mood for Love</TableCell>
              <TableCell>A1,12,13</TableCell>
              <TableCell>4/13/2025 - 5:00 PM</TableCell>
              <TableCell>₱ 600.00</TableCell>
              <TableCell>
                <StatusDropdown />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TablePagination />
      </div>
    </ThemeProvider>
  );
};

export default TicketTable;
