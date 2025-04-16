import { FileInput, Label } from "flowbite-react";

const PreviewUpload = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-[18rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed dark:border-[#BBBBBB] dark:bg-[#282828] dark:hover:border-white dark:hover:bg-[#2C2C2C] transition-all duration-200 ease-in-out"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <img
            src="/upload-icon.png"
            alt="Upload Icon"
            className="w-12 h-12 mb-2 opacity-20"
          />
          <p className="mb-2 text-sm dark:text-[#6D6C6C]">
            Click to upload a preview of the movie
          </p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
  );
};

export default PreviewUpload;
