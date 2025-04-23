import React, { useState } from "react";
import MovieDropdown from "../components/MovieDropdown";
import PreviewUpload from "../components/PreviewUpload";
import PosterUpload from "../components/PosterUpload";
import { FloatingLabel } from "flowbite-react";
import SummaryTextArea from "../components/SummaryTextArea";
import MovieMenuDropdown from "../components/MovieMenuDropdown";

const MovieManagement = () => {
  const [movietitle, setMovietitle] = useState("");
  const [releasedYear, setReleasedYear] = useState("");
  const [director, setDirector] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [summary, setSummary] = useState("");
  const [posterFile, setPosterFile] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null); // For displaying poster
  const [previewPreview, setPreviewPreview] = useState(null); // For displaying preview
  const [message, setMessage] = useState("");
  const [dropdownLabel, setDropdownLabel] = useState("Select Current Movie"); // Default dropdown label
  const [resetTrigger, setResetTrigger] = useState(false); // Trigger for resetting file inputs
  const [refreshTrigger, setRefreshTrigger] = useState(false); // Trigger for refreshing movie titles

  const handleRefreshTitles = () => {
    setRefreshTrigger((prev) => !prev); // Toggle the refresh trigger
  };

  const handleSelectMovie = async (title) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/details/${title}`
      );
      const data = await response.json();

      if (response.ok) {
        const movie = data.movie;
        setMovietitle(movie.movietitle);
        setReleasedYear(movie.releasedYear);
        setDirector(movie.director);
        setTimeslot(movie.timeslot);
        setSummary(movie.summary);
        setPosterPreview(`http://localhost:8000${movie.posterPath}`); // Set poster image
        setPreviewPreview(`http://localhost:8000${movie.previewPath}`); // Set preview image
        setDropdownLabel(title); // Update dropdown label
      } else {
        console.error("Failed to fetch movie details:", data.msg);
      }
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  const handleResetMovie = () => {
    // Reset all states to their default values
    setMovietitle("");
    setReleasedYear("");
    setDirector("");
    setTimeslot("");
    setSummary("");
    setPosterFile(null);
    setPreviewFile(null);
    setPosterPreview(null); // Reset poster preview
    setPreviewPreview(null); // Reset preview preview
    setDropdownLabel("Select Current Movie"); // Reset dropdown label
    // setResetTrigger((prev) => !prev); // Toggle reset trigger
    setResetTrigger((prev) => !prev); // Toggle reset trigger
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("movietitle", movietitle);
    formData.append("releasedYear", releasedYear);
    formData.append("director", director);
    formData.append("timeslot", timeslot);
    formData.append("summary", summary);
    formData.append("poster", posterFile);
    formData.append("preview", previewFile);

    try {
      const response = await fetch("http://localhost:8000/api/movies/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Movie uploaded successfully!");
        handleResetMovie(); // Reset all fields after saving
        handleRefreshTitles(); // Refresh movie titles
      } else {
        setMessage(data.msg || "Failed to upload movie.");
      }
    } catch (err) {
      console.error("Error occurred while uploading the movie:", err);
      setMessage("An error occurred while uploading the movie.");
    }
  };

  const handleDeleteMovie = async () => {
    if (!movietitle) {
      setMessage("Please select a movie to delete.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/delete/${movietitle}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Movie deleted successfully.");
        handleResetMovie(); // Reset the form after deleting
        handleRefreshTitles(); // Refresh movie titles
      } else {
        setMessage(data.msg || "Failed to delete the movie.");
      }
    } catch (err) {
      console.error("Error occurred while deleting the movie:", err);
      setMessage("An error occurred while deleting the movie.");
    }
  };

  const handleDeleteAllMovies = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/movies/deleteAll",
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("All movies deleted successfully.");
        handleResetMovie(); // Reset the form after deleting all movies
        handleRefreshTitles(); // Refresh movie titles
      } else {
        setMessage(data.msg || "Failed to delete all movies.");
      }
    } catch (err) {
      console.error("Error occurred while deleting all movies:", err);
      setMessage("An error occurred while deleting all movies.");
    }
  };

  const handleUpdateMovie = async () => {
    if (!movietitle) {
      setMessage("Please select a movie to update.");
      return;
    }

    const formData = new FormData();

    // Add text fields to the form data
    formData.append("releasedYear", releasedYear);
    formData.append("director", director);
    formData.append("timeslot", timeslot);
    formData.append("summary", summary);

    // Check if new poster or preview files are uploaded
    if (posterFile) {
      formData.append("poster", posterFile); // Add poster file if uploaded
    }
    if (previewFile) {
      formData.append("preview", previewFile); // Add preview file if uploaded
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/movies/update/${movietitle}`,
        {
          method: "PUT",
          body: formData, // Send form data
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Movie details updated successfully.");
        handleResetMovie(); // Reset the form after updating
        handleRefreshTitles(); // Refresh movie titles
      } else {
        setMessage(data.msg || "Failed to update movie details.");
      }
    } catch (err) {
      console.error("Error occurred while updating the movie:", err);
      setMessage("An error occurred while updating the movie.");
    }
  };

  return (
    <form
      className="flex flex-col px-5 py-7 w-full gap-5 justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-row w-full justify-between">
        <MovieDropdown
          onSelectMovie={handleSelectMovie}
          label={dropdownLabel}
          refreshTrigger={refreshTrigger} // Pass refresh trigger
        />
        <MovieMenuDropdown
          handleSaveNewMovie={handleSubmit}
          handleResetMovie={handleResetMovie}
          handleDeleteMovie={handleDeleteMovie}
          handleDeleteAllMovies={handleDeleteAllMovies}
          handleUpdateMovie={handleUpdateMovie}
        />
      </div>
      <PreviewUpload
        setFile={setPreviewFile}
        preview={previewPreview}
        resetTrigger={resetTrigger} // Pass reset trigger
      />
      <div className="w-full flex flex-row justify-between">
        <PosterUpload
          setFile={setPosterFile}
          preview={posterPreview}
          resetTrigger={resetTrigger} // Pass reset trigger
        />
        <div className="w-md flex flex-col gap-4 my-4">
          <p className="dark:text-white">Movie Details</p>
          <FloatingLabel
            variant="outlined"
            label="Movie Title"
            id="movieTitle"
            type="text"
            value={movietitle}
            onChange={(e) => setMovietitle(e.target.value)}
            className="dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Date Released (e.g., 2003)"
            id="dateReleased"
            type="text"
            value={releasedYear}
            onChange={(e) => setReleasedYear(e.target.value)}
            className="dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Directed By"
            id="directedBy"
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
          <FloatingLabel
            variant="outlined"
            label="Timeslot"
            id="timeslot"
            type="text"
            value={timeslot}
            onChange={(e) => setTimeslot(e.target.value)}
            className="dark:bg-[#242424] border-[#AAAAAA] focus:border-white dark:border-[#BBBBBB] dark:focus:border-white peer-focus:text-white dark:focus:text-white dark:text-[#807B7B] peer-focus:dark:text-white"
          />
        </div>
        <SummaryTextArea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </form>
  );
};

export default MovieManagement;
