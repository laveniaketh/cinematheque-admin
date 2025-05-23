import { Label, Textarea } from "flowbite-react";

const SummaryTextArea = ({ value, onChange }) => {
  return (
    <div className="w-xs my-4">
      <div className="mb-2 block">
        <Label htmlFor="summary">Movie Description</Label>
      </div>
      <Textarea
        id="summary"
        placeholder="Brief summary of the movie"
        required
        rows={10}
        value={value} // Controlled value from parent
        onChange={onChange} // Controlled onChange handler from parent
        className="dark:border-[#BBBBBB] dark:bg-[#282828] dark:text-[#6D6C6C] dark:focus:text-white dark:placeholder-[#6D6C6C] dark:focus:border-white dark:focus:ring-white"
      />
    </div>
  );
};

export default SummaryTextArea;
