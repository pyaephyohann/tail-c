import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const SideBar = ({ open, setOpen, sideBarMenuItems }) => {
  return (
    <div>
      <Box>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          {sideBarMenuItems.map((item) => {
            return (
              <Box sx={{ mt: 3 }} key={item}>
                <div className="py-1 px-10 font-roboto text-base">{item}</div>
              </Box>
            );
          })}
        </Drawer>
      </Box>
    </div>
  );
};

export default SideBar;
