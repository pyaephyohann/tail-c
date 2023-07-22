import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const modal = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "9rem",
    transition: { delay: 0.5 },
  },
};

const startAgain = {
  hover: {
    scale: 1.3,
  },
};

const Modal = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-0 right-0 h-full w-full bg-black bg-opacity-50"
        >
          <motion.div
            variants={modal}
            className="w-fit py-16 px-28 rounded-xl font-roboto text-center mx-auto bg-white flex flex-col"
          >
            <span className="mb-8 text-xl">Want to make another pizza?</span>
            <motion.span
              onClick={() => setShow(false)}
              variants={startAgain}
              whileHover="hover"
              className="border-2 cursor-pointer border-primary rounded-full py-3 px-5"
            >
              <Link to={`/`}>Start Again</Link>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
