import { Link } from "react-router-dom";
import TailwindSeries from "./components/TailwindSeries";
import { motion } from "framer-motion";
import Loader from "./components/Loader";

const buttonVariants = {
  hover: {
    scale: 1.5,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

function App() {
  return (
    <div className="App">
      <TailwindSeries />
      <motion.div
        variants={buttonVariants}
        animate="visible"
        whileHover="hover"
        className="mx-auto mt-6 text-3xl font-body text-primary w-fit border-primary py-3 px-6 border-2 rounded-full"
      >
        <Link to={`/base`}>Go Order Pizza</Link>
      </motion.div>
      <Loader />
    </div>
  );
}

export default App;
