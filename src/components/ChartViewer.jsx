import * as motion from "motion/react-client";
import React from "react";

const ChartViewer = (props) => {
  const { icon, title, content } = props.config;
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ borderColor: "orange", borderWidth: "0.5px" }}
      // whileTap={{ scale: 0.95 }}
      className={`card flex bg-zinc-100 dark:bg-zinc-900 cursor-pointer p-3 h-full md:p-5`}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row mb-5">
          <div className="centered mr-2">{icon}</div>
          <div className="font-medium centered">{title}</div>
        </div>
        <div className="h-[90%] w-full overflow-auto">{content}</div>
      </div>
    </motion.div>
  );
};

export default ChartViewer;
