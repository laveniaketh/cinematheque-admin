import { FileInput, Label } from "flowbite-react";

const PosterUpload = () => {
  return (
    <div className="">
      <Label
        htmlFor="dropzone-file"
        className="flex w-[14rem] h-[20rem] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed dark:border-[#BBBBBB] dark:bg-[#282828] dark:hover:border-white dark:hover:bg-[#2C2C2C] transition-all duration-200 ease-in-out"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <img
            src="/upload-icon.png"
            alt="Upload Icon"
            className="w-12 h-12 mb-2 opacity-20"
          />
          <p className="mb-2 text-sm dark:text-[#6D6C6C]">
            Click to upload movie poster
          </p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
  );
};

export default PosterUpload;
