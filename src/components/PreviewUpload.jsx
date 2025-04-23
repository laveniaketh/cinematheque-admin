import { useState, useEffect, useRef } from "react";
import { FileInput, Label } from "flowbite-react";

const PreviewUpload = ({ setFile, preview, resetTrigger }) => {
  const [previewImage, setPreviewImage] = useState(preview || null);
  const fileInputRef = useRef(null); // Reference to the FileInput element

  useEffect(() => {
    setPreviewImage(preview); // Update state when preview prop changes
    if (preview === null && fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the FileInput value
    }
  }, [preview]);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
      setPreviewImage(null); // Clear the preview
      setFile(null); // Reset the file state
    }
  }, [resetTrigger, setFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="flex w-full items-center justify-center relative h-[18rem] rounded-lg border-2 border-dashed dark:border-[#BBBBBB] dark:bg-[#282828] hover:opacity-80 hover:border-white transition-all duration-200 ease-in-out cursor-pointer"
      style={{
        backgroundImage: previewImage ? `url(${previewImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Label
        htmlFor="dropzone-file"
        className="absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center"
      >
        {!previewImage && (
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
        )}
        <FileInput
          id="dropzone-file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef} // Attach the ref to the FileInput
        />
      </Label>
    </div>
  );
};

export default PreviewUpload;
