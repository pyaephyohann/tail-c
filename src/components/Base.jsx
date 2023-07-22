import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const variantsContainer = {
  hidden: {
    y: "-80vw",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const contentVariants = {
  hidden: {
    x: "-80vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Base = () => {
  const [appear, setAppear] = useState(false);

  const bases = ["Classic", "Thin And Crispy", "Thick Crust"];

  return (
    <div>
      <div className="mt-36 flex justify-center mb-4">
        <motion.span
          variants={variantsContainer}
          initial="hidden"
          animate="visible"
          className="text-2xl font-roboto text-primary border-primay border-b-2 border-primary pb-3"
        >
          Step 1: Choose Your Base
        </motion.span>
      </div>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col text-white items-center"
      >
        {bases.map((base) => {
          return (
            <motion.div
              whileHover={{ scale: 1.4, color: "yellow" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                if (appear) {
                  return setAppear(false);
                }
                setAppear(true);
              }}
              className="my-3 text-xl"
            >
              {base}
            </motion.div>
          );
        })}
      </motion.div>
      <AnimatePresence>
        {appear && (
          <div className="flex justify-center">
            <motion.div
              exit={{ x: "-100vw" }}
              variants={nextVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.5,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="py-2 px-5 cursor-pointer mt-8 border-primary rounded-full text-primary border-2 text-2x"
            >
              <Link to={`/toppings`}>NEXT</Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Base;
