import { motion } from "framer-motion";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const contentVariants = {
  hidden: {
    x: "-80vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }, [show]);

  return (
    <div className="relative">
      <motion.div variants={contentVariants} initial="hidden" animate="visible">
        <div className="text-center pt-36 text-primary font-body text-5xl">
          Thank you for your order
        </div>
        <motion.div
          variants={childVariant}
          className="text-primary text-xl font-roboto mt-12 flex flex-col items-center"
        >
          <div className="mb-6">You ordered Thick Crust pizza with :</div>
          <div className="mb-3">Mushrooms</div>
          <div className="pb-96">Onions</div>
        </motion.div>
        <Modal show={show} setShow={setShow} />
      </motion.div>
    </div>
  );
};

export default Order;
