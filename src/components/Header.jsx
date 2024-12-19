import { Code, Github } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-row justify-between bg-zinc-50 p-5 md:p-7 dark:bg-black">
      <div className="flex flex-row">
        <div className="centered mr-2 md:block">
          <Code strokeWidth={2} />
        </div>
        <div className="centered md:block">
          <span>
            Tech <strong>Tracker</strong>
          </span>
        </div>
      </div>

      <div className="flex flex-row text-2xl">
        <div className="centered mr-2 md:block md:mt-1">
          <Github strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default Header;
