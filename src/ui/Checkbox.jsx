import { useState } from "react";

import { motion } from "motion/react";

const CheckBox = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex gap-2 self-start">
      <button
        className={`flex items-center w-10 h-6 px-0.5 ${
          isOn ? "justify-end *:bg-white" : "justify-start *:bg-header-outline"
        } cursor-pointer bg-transparent border-2 border-header-outline rounded-full`}
        onClick={() => setIsOn((prevIsOn) => !prevIsOn)}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full"
          transition={{ duration: 0.25, type: "spring" }}
          layout
        />
      </button>
      <span
        className="cursor-pointer text-white"
        onClick={() => setIsOn((prevIsOn) => !prevIsOn)}
      >
        Remember me
      </span>
    </div>
  );
};

export default CheckBox;
