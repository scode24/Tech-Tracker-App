import { Code } from "lucide-react";
import React from "react";
import UserInfoCard from "./UserInfoCard";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-5 md:p-7">
      <div className="flex flex-row text-2xl">
        <div className="centered mr-2 md:block md:mt-1">
          <Code strokeWidth={2} />
        </div>
        <div className="centered md:block">
          <span>
            Tech <strong>Tracker</strong>
          </span>
        </div>
      </div>

      <UserInfoCard
        config={{
          photoUrl: "",
          name: "Soumyabrata Sarkar",
          email: "sarkar.soumyabrata2@gmail.com",
          username: "",
          description: "",
          githubUrl: "",
        }}
      />
    </div>
  );
};

export default Header;
