import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";

import MainContext from "../../context";
import { tabsData } from "../../data/tabsData";
import { useTheme } from "@emotion/react";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const data = tabsData();
  const theme = useTheme().palette.mode;

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            color: "textColor.main",
            textShadow: "black 1px 0 10px",
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 25,
              maxHeight: 30,
              fontWeight: "thin",
            },
            "&.Mui-selected": {
              color: theme === "dark" ? "#623AB1" : "#black",
              fontSize: 18,
              fontWeight: "bold",
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
