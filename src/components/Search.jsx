import { TextInput, ThemeProvider } from "flowbite-react";
import { useState } from "react";
import searchIcon from "/search-icon.png";

const SearchIcon = () => (
  <img
    src={searchIcon}
    alt="Search Icon"
    className="w-5 h-5 dark:opacity-20 "
  />
);

const customTheme = {
  textInput: {
    base: "flex",
    field: {
      input: {
        base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          primary:
            "font-medium dark:border-[#BBBBBB] dark:bg-[#242424] dark:text-[#6D6C6C] dark:placeholder-[#6D6C6C] dark:focus:border-white dark:focus:ring-white dark:focus:text-white dark:peer-focus:text-white",
        },
      },
    },
  },
};

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="w-[15rem] ">
        <TextInput
          id="search"
          icon={SearchIcon}
          type="text"
          placeholder="Search"
          required
          color="primary"
          value={value}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default Search;
