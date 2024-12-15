import { Calendar, CalendarSearch, FileSlidersIcon } from "lucide-react";
import React, { useState } from "react";
import InfoCard from "./InfoCard";

const DateSelector = (props) => {
  const { startYear, endYear, handleYearChangeFn } = props.config;
  const [selectedYear, setSelectedYear] = useState(startYear);

  const handleSliderChangeFn = (event) => {
    setSelectedYear(event.target.value);
    handleYearChangeFn(event.target.value);
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="vertical-centered">
        <InfoCard
          config={{
            description: "Year",
            icon: <Calendar strokeWidth={1} />,
          }}
        />
        <span className="text-5xl font-medium">{selectedYear}</span>
      </div>

      <div className="vertical-centered">
        <InfoCard
          config={{
            description: "Slide to select year",
            icon: <FileSlidersIcon strokeWidth={1} />,
          }}
        />
        <input
          className="mt-2 mb-4 w-[150px] h-[2px] rounded-lg appearance-none cursor-pointer range-sm md:w-[200px] dark:bg-black"
          type="range"
          min={startYear}
          max={endYear}
          value={selectedYear}
          onChange={handleSliderChangeFn}
        />

        <InfoCard
          config={{
            description: `${startYear} - ${endYear}`,
            icon: <CalendarSearch strokeWidth={1} />,
          }}
        />
      </div>
    </div>
  );
};

export default DateSelector;
