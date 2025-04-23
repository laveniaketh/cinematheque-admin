import { Dropdown, DropdownItem } from "flowbite-react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "flowbite-react";

const MovieDropdown = ({ onSelectMovie, label, refreshTrigger }) => {
  const [titles, setTitles] = useState([]); // State to store movie titles

  const fetchTitles = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/movies/titles");
      const data = await response.json();
      if (response.ok) {
        setTitles(data.titles); // Set movie titles
      } else {
        console.error("Failed to fetch movie titles:", data.msg);
      }
    } catch (err) {
      console.error("Error fetching movie titles:", err);
    }
  };

  // Fetch titles on mount and when refreshTrigger changes
  useEffect(() => {
    fetchTitles();
  }, [refreshTrigger]);

  const handleSelect = (title) => {
    onSelectMovie(title); // Pass selected title to parent
  };

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
        label={label} // Use dynamic label
        placement="bottom"
        className="b dark:border-2 dark:text-[#6D6C6C] dark:bg-[#282828] dark:hover:bg-[#2C2C2C]  dark:focus:bg-[#2C2C2C] dark:focus:text-white dark:border-[#BBBBBB]  dark:focus:ring-white"
      >
        {titles.map((title) => (
          <DropdownItem key={title} onClick={() => handleSelect(title)}>
            {title}
          </DropdownItem>
        ))}
      </Dropdown>
    </ThemeProvider>
  );
};

export default MovieDropdown;
