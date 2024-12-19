import * as motion from "motion/react-client";
import React from "react";

const DataCard = (props) => {
  const { firstHtml, secondHtml, cardSize, onClickFn } = props.config;
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ borderColor: "orange", borderWidth: "0.5px" }}
      whileTap={{ scale: 0.95 }}
      className={`card h-[100%] flex ${
        cardSize === "large" ? "flex-row" : "flex-col"
      } bg-zinc-100 dark:bg-zinc-900 cursor-pointer`}
      onClick={() => {
        if (onClickFn !== undefined) onClickFn();
      }}
    >
      <div className="flex-1">{firstHtml}</div>
      <div className="flex-1">{secondHtml}</div>
    </motion.div>
  );
};

export default DataCard;
