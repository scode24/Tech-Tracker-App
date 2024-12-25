import { motion } from "motion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  return (
    <div className="horizontal-centered h-[100vh] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-[50%] md:mt-[15%] lg:mt-[10%]"
      >
        <span className="text-5xl">404</span>
        <div
          className="flex flex-row text-2xl mt-7"
          onClick={() => navigate("/")}
        >
          <span className="mr-1">Are you looking for</span>
          <span className="font-bold text-orange-500 cursor-pointer">
            Tech Tracker
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
