import React from "react";
import MovieDropdown from "../components/MovieDropdown";
import PreviewUpload from "../components/PreviewUpload";
import PosterUpload from "../components/PosterUpload";
import { FloatingLabel } from "flowbite-react";
import SummaryTextArea from "../components/SummaryTextArea";
import MovieMenuDropdown from "../components/MovieMenuDropdown";

const MovieManagement = () => {
  return (
    <div className="flex flex-col px-5 py-7 w-full gap-5 justify-center items-center">
      <div className="flex flex-row w-full justify-between">
        <MovieDropdown />
        <MovieMenuDropdown />
      </div>
      <PreviewUpload />
      <div className="w-full flex flex-row justify-between ">
        <PosterUpload />
        <div className=" w-md flex flex-col gap-4 my-4">
          <p className="  dark:text-white ">Movie Details</p>
          <FloatingLabel
            variant="outlined"
            label="Movie Title"
            id="movieTitle"
            type="text"
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Date Released(e.g 2003)"
            id="dateReleased"
            type="text"
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Directed By"
            id="directedBy"
            type="text"
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Timeslot"
            id="timeslot"
            type="text"
            className=" dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
        </div>
        <SummaryTextArea />
      </div>
    </div>
  );
};

export default MovieManagement;
