import { useState } from "react";
import SideBar from "./SideBar";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const TailwindSeries = () => {
  const [open, setOpen] = useState(false);

  const sideBarItems = ["Home", "About", "Contact"];
  return (
    <div>
      <div className="flex justify-between mt-6 ">
        <motion.div
          drag
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="font-body text-4xl w-2/5 md:w-1/5 text-primary select-none cursor-pointer text-center"
        >
          TailX
        </motion.div>
        <div onClick={() => setOpen(true)} className=" md:hidden mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className=" w-3/5 hidden md:block">
          <div className="flex justify-evenly font-roboto text-xl">
            <div className="text-primary cursor-pointer transform hover:scale-150 transition ease-out duration-500">
              Home
            </div>
            <div className="cursor-pointer text-primary transform hover:scale-150 transition ease-out duration-500">
              About
            </div>
            <div className="cursor-pointer text-primary transform hover:scale-150 transition ease-out duration-500">
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:mr-20 mt-5 mr-10  ">
        <div className="mr-5 btn hover:bg-yellow-300 hover:text-white transiion ease-in-out duration-500">
          Log in
        </div>
        <div className="btn hover:bg-yellow-300 hover:text-white transiion ease-in-out duration-500">
          Log out
        </div>
      </div>

      <div className="flex justify-evenly mt-10 flex-wrap">
        <div className="card transform hover:scale-125 transition ease-in-out duration-500">
          <img
            alt="Reine Murasame"
            className="h-44 sm:h-64"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/files%2FReine%20Murasame%20Icon.jpg%20%20%20%20%20%20%202023-6-15%2016%3A42%3A32?alt=media&token=25149dfd-da74-4ac7-9936-8d87ae8af6c4"
          />
          <div className="mt-2 mb-2 text-center">Reine Murasame</div>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <span>Yandere</span>
          </div>
        </div>
        <div className="card transform hover:scale-125 transition ease-in-out duration-500">
          <img
            alt="Huraru"
            className="h-44 sm:h-64"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/files%2Fanime%20aesthetics%20%C3%A2%C2%98%C2%BD%C3%A0%C2%BC%C2%93%20-%205%25.jpg%20%20%20%20%20%20%202023-6-16%209%3A28%3A42?alt=media&token=aed47cb8-3271-4978-b175-c38857ca6a76"
          />
          <div className="mt-2 mb-2 text-center">Huraru</div>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <span>Pervert</span>
          </div>
        </div>
        <div className="card transform hover:scale-125 transition ease-in-out duration-500">
          <img
            alt="Hime"
            className="h-44 sm:h-64"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/files%2Fdownload%20(4).jpg%20%20%20%20%20%20%202023-6-16%209%3A22%3A11?alt=media&token=e82dc187-02c4-4663-affb-79de003e97e6"
          />
          <div className="mt-2 mb-2 text-center">Hime</div>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <span>Kuudere</span>
          </div>
        </div>
        <SideBar
          open={open}
          setOpen={setOpen}
          sideBarMenuItems={sideBarItems}
        />
      </div>
    </div>
  );
};

export default TailwindSeries;
