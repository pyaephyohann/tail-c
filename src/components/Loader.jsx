import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
        repeatType: "reverse",
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="w-8 h-8 bg-white rounded-full mt-10 mx-auto"
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
