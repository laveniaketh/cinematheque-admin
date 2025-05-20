import { Pagination, ThemeProvider } from "flowbite-react";

const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const customTheme = {
    pagination: {
      base: "",
      layout: {
        table: {
          base: "text-sm text-gray-700 dark:text-gray-400",
          span: "font-semibold text-gray-900 dark:text-white",
        },
      },
      pages: {
        base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
        showIcon: "inline-flex",
        previous: {
          base: "ml-0 rounded-l-lg border border px-3 py-2 leading-tight dark:border-[#BBBBBB] dark:bg-[#282828] dark:text-[#6D6C6C] enabled:dark:hover:bg-[#2C2C2C] enabled:dark:hover:text-white transition-all duration-300 ease-in-out",
          icon: "h-5 w-5",
        },
        next: {
          base: "rounded-r-lg border px-3 py-2 leading-tight  dark:border-[#BBBBBB] dark:bg-[#282828] dark:text-[#6D6C6C] enabled:dark:hover:bg-[#2C2C2C] enabled:dark:hover:text-white transition-all duration-300 ease-in-out",
          icon: "h-5 w-5",
        },
        selector: {
          base: "w-12 border py-2 leading-tight dark:border-[#BBBBBB] dark:bg-[#282828] dark:text-[#6D6C6C] enabled:dark:hover:bg-[#2C2C2C] enabled:dark:hover:text-white",
          active: " dark:border-white dark:bg-[#3B3B3B] dark:text-white",
          disabled: "cursor-not-allowed opacity-50",
        },
      },
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </ThemeProvider>
  );
};

export default TablePagination;
