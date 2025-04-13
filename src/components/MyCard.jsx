import { Card } from "flowbite-react";

const MyCard = ({ icon, title, description, style }) => {
  return (
    <Card
      href="#"
      className={`[&>div]:gap-2 overflow-hidden relative w-xs [&>div]:dark:bg-[#242424] ${style}`}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-row ">
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>

      <p className="relative z-10 font-normal dark:text-[#6D6C6C]">
        {description}
      </p>

      {/* Background Icon */}
      <div
        className="absolute -bottom-8 right-0 w-38 h-38 bg-no-repeat bg-contain opacity-10 "
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
    </Card>
  );
};

export default MyCard;
