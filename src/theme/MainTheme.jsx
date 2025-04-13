import { createTheme } from "flowbite-react";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600 text-white",
      secondary:
        "bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
    checkbox: {
      color: {
        primary:
          "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      },
    },

    // floatingLabel: {
    //   variant: {
    //     outlined: {
    //       sm: "peer block w-full appearance-none rounded-lg border  px-2.5 pb-2.5 pt-4 text-xs   focus:outline-none focus:ring-0  dark:bg-[#242424] border-[#AAAAAA] text-gray-900 focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:text-[#807B7B]  peer-focus:dark:text-white ",
    //       md: "peer block w-full appearance-none rounded-lg border px-2.5 pb-2.5 pt-4 text-sm   focus:outline-none focus:ring-0  dark:bg-[#242424] border-[#AAAAAA] text-gray-900 focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:text-[#807B7B]  peer-focus:dark:text-white ",
    //     },
    //   },
    // },
  },
});

export default customTheme;
