import React from "react";
import MyCard from "../components/MyCard";
import PosterCarousel from "../components/PosterCarousel";
import { useState } from "react";

const Dashboard = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const movieDetails = [
    {
      title: "In the Mood for Love",
      time: "1:00 PM - 3:00 PM",
      sales: "₱ 1,250.00",
      ticketsSold: "124",
      seatsAvailable: "23",
    },
    {
      title: "Happy Together",
      time: "3:30 PM - 5:00 PM",
      sales: "₱ 980.00",
      ticketsSold: "87",
      seatsAvailable: "30",
    },
    {
      title: "Fallen Angels",
      time: "5:30 PM - 7:30 PM",
      sales: "₱ 800.00",
      ticketsSold: "140",
      seatsAvailable: "18",
    },
  ];

  const activeMovie = movieDetails[activeIndex];
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center items-center gap-10 px-5 py-10">
        <MyCard
          icon="/sales-icon.png"
          title="₱ 1,250.00"
          description="Total Sales"
          style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] dark:[&>div]:border-white [&>div]:border-2"
        />
        <MyCard
          icon="/tickets-icon.png"
          title="230"
          description="Total Tickets Sold"
          style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] dark:[&>div]:border-white [&>div]:border-2"
        />
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-3xl font-bold antialiased leading-none tracking-tight text-gray-900 dark:text-white">
            NOW SHOWING
          </h1>
          <PosterCarousel
            swiperInstance={swiperInstance}
            setSwiperInstance={setSwiperInstance}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <div className="flex flex-col gap-4 p-5 ">
          <MyCard
            title={activeMovie.title}
            description={activeMovie.time}
            style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-sm"
            icon="/videography.png"
          />
          <div className="grid grid-cols-2 gap-2">
            <MyCard
              title={activeMovie.sales}
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
            title={activeMovie.seatsAvailable}
            description="Seats Available"
            style="[&>div]:rounded-lg [&>div]:shadow-lg [&>div]:shadow-[#504F4F] border-none w-sm"
            icon="/movie-seat.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
