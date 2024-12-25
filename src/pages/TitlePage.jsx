import { Github, Play } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TitlePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  const onChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onClickNext = () => {
    if (username === undefined || username === "") return;
    navigate("tileMap?username=" + username);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  return (
    <div className="horizontal-centered h-[100vh] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-[50%] md:mt-[15%] lg:mt-[10%]"
      >
        <span className="flex flex-row font-medium text-xl text-center md:text-2xl">
          Year by Year, Line by Line
        </span>
        <span className="text-3xl text-orange-500 text-center font-bold mt-5 md:text-5xl">
          {"<The Journey of Code Across Years />"}
        </span>

        <div className="flex-row mt-[70px] hidden md:flex">
          <div className="vertical-centered rounded-l-md border px-2">
            <Github size={45} strokeWidth={1} />
          </div>
          <div className="flex flex-col border p-2 px-3">
            <span>All you need</span>
            <input
              className="text-3xl font-medium bg-transparent"
              type="text"
              placeholder="Github Username"
              onChange={(e) => onChange(e)}
              onKeyDown={(e) => onPressEnter(e)}
            />
          </div>

          <motion.div
            whileTap={{ scale: 0.5 }}
            className="vertical-centered text-orange-500 rounded-r-md border px-2 cursor-pointer"
            onClick={() => onClickNext()}
            onKeyDown={(e) => onPressEnter(e)}
          >
            <Play size={45} strokeWidth={1} />
          </motion.div>
        </div>

        <div className="flex flex-row mt-10 md:hidden">
          <div className="vertical-centered rounded-l-md border px-2">
            <Github size={20} strokeWidth={1} />
          </div>
          <div className="flex flex-col border p-2">
            <span>All you need</span>
            <input
              className="text-lg font-medium bg-transparent"
              type="text"
              placeholder="Github Username"
              onChange={(e) => onChange(e)}
              onKeyDown={(e) => onPressEnter(e)}
            />
          </div>

          <motion.div
            whileTap={{
              scale: 0.5,
            }}
            className="vertical-centered text-orange-500 rounded-r-md border px-2 cursor-pointer"
            onClick={() => onClickNext()}
            onKeyDown={(e) => onPressEnter(e)}
          >
            <Play size={20} strokeWidth={1} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TitlePage;
