import { Github } from "lucide-react";
import React from "react";

const UserInfoCard = (props) => {
  const { photoUrl, name, username, email, description, githubUrl } =
    props.config;
  return (
    <div className="flex flex-row">
      <div className="centered md:mr-3">
        <img
          src="logo512.png"
          alt=""
          className="rounded-md bg-black w-14 h-14"
        />
      </div>

      <div className="vertical-centered hidden md:flex md:pr-3 md: border-r">
        <div className="text-xl font-medium">{name}</div>
        <div className="">{email}</div>
      </div>

      <div
        className="centered rounded-md text-7xl bg-zinc-200 w-14 h-14 cursor-pointer ml-3 md:hidden"
        onClick={() => window.open(githubUrl)}
      >
        <Github strokeWidth={2} />
      </div>

      <div
        className="centered pl-3 text-7xl hidden cursor-pointer md:flex"
        onClick={() => window.open(githubUrl)}
      >
        <Github strokeWidth={2} />
      </div>
    </div>
  );
};

export default UserInfoCard;
