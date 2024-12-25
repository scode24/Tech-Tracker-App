import { Code, Github } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 flex flex-row justify-between bg-zinc-50 p-5 md:p-7 dark:bg-black">
      <div className="flex flex-row">
        <div className="centered mr-2 md:block">
          <Code strokeWidth={2} />
        </div>
        <div
          className="centered cursor-pointer md:block"
          onClick={() => navigate("/")}
        >
          <span>
            Tech <strong>Tracker</strong>
          </span>
        </div>
      </div>

      <div className="flex flex-row text-2xl">
        <div
          className="centered mr-2 md:block md:mt-1 cursor-pointer"
          onClick={() => window.open("https://github.com/scode24")}
        >
          <Github strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default Header;
