import React from "react";
import DateSelector from "../components/DateSelector";

const HomePage = () => {
  const handleYearChangeFn = (year) => {
    console.log(year);
  };

  return (
    <div className="flex flex-col rounded-md border shadow m-5 lg:mx-[5%]">
      <div className="flex flex-row border-b">
        <div className="w-full p-5 border-r md:w-2/3">
          <DateSelector
            config={{
              startYear: "2021",
              endYear: "2024",
              handleYearChangeFn: handleYearChangeFn,
            }}
          />
        </div>
        <div className="hidden md:w-1/3">coder</div>
      </div>

      <div>coder</div>
    </div>
  );
};

export default HomePage;
