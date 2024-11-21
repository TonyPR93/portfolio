import React from "react";
import "../css/separator.css";
import { motion } from "framer-motion";

function separatorBorder() {
  return (
    <motion.div
      className="separatorpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    >
      <div className="separatorLs2"></div>
      <div className="separatorNd"></div>
      <div className="separatorNd2"></div>
      <div className="separatorNd"></div>
      <div className="separatorIn"></div>
      <div className="separatorNd"></div>
      <div className="separatorNd2"></div>
      <div className="separatorNd"></div>
      <div className="separatorLs2"></div>
    </motion.div>
  );
}

export default separatorBorder;
