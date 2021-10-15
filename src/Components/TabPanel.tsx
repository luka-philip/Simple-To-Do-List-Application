import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function BasicTabs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab label="Home"></Tab>
          <Tab label="About"></Tab>
        </Tabs>
      </Box>
    </Box>
  );
}

export default BasicTabs;
