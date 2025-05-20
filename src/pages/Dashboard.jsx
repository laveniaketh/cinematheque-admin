import React, { useState, useEffect } from "react";
import MyCard from "../components/MyCard";
import PosterCarousel from "../components/PosterCarousel";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [movieDetails, setMovieDetails] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch dashboard stats from the backend
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/dashboard/stats"
        );
        const data = await response.json();

        if (response.ok) {
          setMovieDetails(data.movies);
          setTotalSales(data.totalSales);
          setTotalTicketsSold(data.totalTicketsSold);
        } else {
          setError(data.msg || "Failed to fetch dashboard stats.");
        }
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
        setError("An error occurred while fetching dashboard stats.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  const activeMovie = movieDetails[activeIndex];

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center h-full">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-row justify-center items-center gap-10 px-5 py-10">
        <MyCard
          icon="/sales-icon.png"
          title={`₱ ${totalSales.toLocaleString()}`}
          description="Total Sales"
          style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] dark:[&>div]:border-white [&>div]:border-2"
        />
        <MyCard
          icon="/tickets-icon.png"
          title={totalTicketsSold}
          description="Total Tickets Sold"
          style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] dark:[&>div]:border-white [&>div]:border-2"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-3xl font-bold antialiased leading-none tracking-tight text-gray-900 dark:text-white">
            NOW SHOWING
          </h1>
          <PosterCarousel
            swiperInstance={swiperInstance}
            setSwiperInstance={setSwiperInstance}
            setActiveIndex={setActiveIndex}
            movieDetails={movieDetails}
          />
        </div>

        {activeMovie && (
          <div className="flex flex-col gap-8 m-auto ">
            <MyCard
              title={activeMovie.movietitle}
              description="Now Showing"
              style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-sm"
              icon="/videography.png"
            />
            <div className="grid grid-cols-2 gap-2">
              <MyCard
                title={`₱ ${activeMovie.totalSales.toLocaleString()}`}
                description="Total Sales"
                style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-10xs"
              />
              <MyCard
                title={activeMovie.ticketsSold}
                description="Total Tickets Sold"
                style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-10xs"
              />
            </div>

            <MyCard
              title={activeMovie.availableSeats}
              description="Seats Available"
              style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-sm"
              icon="/movie-seat.png"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
