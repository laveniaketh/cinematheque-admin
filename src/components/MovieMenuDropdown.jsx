import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import { ThemeProvider } from "flowbite-react";

const MovieMenuDropdown = () => {
  const customTheme = {
    dropdown: {
      arrowIcon: "ml-2 h-4 w-4",
      content: "py-1 focus:outline-none dark:bg-[#282828] rounded",
      floating: {
        animation: "transition-opacity",
        arrow: {
          base: "absolute z-10 h-2 w-2 rotate-45",
          style: {
            dark: "bg-gray-900 dark:bg-gray-700",
            light: "bg-white",
            auto: "bg-white dark:bg-gray-700",
          },
          placement: "-4px",
        },
        base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
        content: "py-1 text-sm text-gray-700 dark:text-gray-200",
        divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
        header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
        hidden: "invisible opacity-0",
        item: {
          container: "",
          base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm  dark:text-[#6D6C6C] dark:bg-[#282828] dark:hover:bg-[#2C2C2C] dark:hover:text-white dark:focus:bg-[#2C2C2C] dark:focus:text-white transition-all duration-300 ease-in-out",
          icon: "mr-2 h-4 w-4",
        },
        style: {
          dark: "bg-gray-900 text-white dark:bg-gray-700",
          light: "border border-gray-200 bg-white text-gray-900",
          auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
        },
        target: "w-fit",
      },
      inlineWrapper: "flex items-center",
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Dropdown
        label=""
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-[#282828] dark:hover:bg-[#2C2C2C] cursor-pointer border-2  dark:border-[#BBBBBB]  dark:hover:border-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 dark:text-[#6D6C6C] dark:hover:text-white "
            >
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </div>
        )}
      >
        <DropdownItem>Save New Changes</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
        <DropdownItem>Delete all Movies</DropdownItem>
        <DropdownItem>Add new Movie</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Movie Archives</DropdownItem>
      </Dropdown>
    </ThemeProvider>
  );
};

export default MovieMenuDropdown;
