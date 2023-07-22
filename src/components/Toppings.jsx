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

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Toppings = () => {
  const toppings = ["mushrooms", "peppers", "onions"];
  const [appear, setAppear] = useState(false);
  return (
    <div>
      <motion.div
        variants={variantsContainer}
        initial="hidden"
        animate="visible"
        className="text-2xl font-roboto text-primary mx-auto mt-36 pb-3 border-b-2 border-primary w-fit"
      >
        Step 2: Choose your toppings
      </motion.div>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center mt-12 text-2xl text-white font-roboto"
      >
        {toppings.map((topping) => {
          return (
            <motion.div
              whileHover={{ scale: 1.4, color: "yellow" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setAppear(!appear)}
              className="mb-6"
            >
              {topping}
            </motion.div>
          );
        })}
        <AnimatePresence>
          {appear && (
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
              className="mt-8 border-2 border-primary rounded-full py-3 px-6"
            >
              <Link to={`/order`}>NEXT</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Toppings;
