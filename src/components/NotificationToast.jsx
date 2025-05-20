import { Toast, ToastToggle, ThemeProvider } from "flowbite-react";

const NotificationToast = ({ message }) => {
  const customTheme = {
    toast: {
      root: {
        base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-[#242424]dark:text-gray-400",
        closed: "opacity-0 ease-out",
      },
      toggle: {
        base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-[#242424] dark:text-gray-500 dark:hover:dark:bg-[#242424] dark:hover:text-white",
        icon: "h-5 w-5 shrink-0",
      },
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="flex flex-col gap-4">
        <Toast>
          <div className="text-sm font-normal">{message}</div>
          <ToastToggle />
        </Toast>
      </div>
    </ThemeProvider>
  );
};

export default NotificationToast;
