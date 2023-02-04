import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Styles from './StyleService.css'
const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 }
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className=" w-full bg-green-400 h-96 sm:h-fit absolute sm:relative   flex justify-evenly sm:justify-center sm:items-center "
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ ease: "easeInOut", duration: 1.3 }}
    >
      <div className="w-64 h-64 rounded-xl bg-red-700  mt-10  ">
        <h1>
          parsa
        </h1>
      </div>
      <div className="w-64 h-64 sm:absolute sm:mt-80 rounded-xl bg-red-700 mt-10  "></div>
      <div className="w-64 h-64 sm:absolute sm:mt-96 rounded-xl bg-red-700 mt-10  "></div>

    </motion.div>
  );
};

export default function Servis() {
  return (
    <div className="App w-full sm:h-fit h-96 flex justify-center ">
      <Box />
    </div>
  );
}
